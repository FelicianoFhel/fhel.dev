<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{
    private const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
    private const MODEL = 'llama-3.1-8b-instant';

    private function getPortfolioContext(): string
    {
        return <<<TEXT
You are a helpful assistant for Fhel Jhon Feliciano's portfolio website. Answer questions based ONLY on the following information. If asked about something not covered here, say you don't have that information and suggest they check the portfolio or contact Fhel.

## About Fhel
- Name: Fhel Jhon Feliciano
- Title: Tech Support / Web Developer
- Location: Cagayan de Oro, Philippines
- Summary: Technical Support specialist with hands-on experience in web development, DNS configuration, and hosting environment management. Strong understanding of how websites, domains, and servers interact. Committed to responsive, empathetic, and solution-focused customer support.

## Contact
- Email: fhelfeliciano@gmail.com
- Phone: +63 910 4180 743
- Location: Cagayan de Oro, Philippines

## Skills
- Full Stack Development, cPanel & Hosting, Technical Documentation & Customer Communication, PC hardware & software troubleshooting, Network configuration & installation
- Frameworks: Laravel, Bootstrap, jQuery, React
- Languages: PHP, JavaScript, HTML5, CSS3
- Databases: MySQL, Supabase
- Tools: cPanel, DNS Zone Editor, SSL Installation, FTP / File Manager

## Experience
1. Intelligent System Initiative at City College of Cagayan de Oro (Oct 2022 – Present): UI/UX, AI integration, web applications, system performance, collaboration with developers.
2. System AI Solution / System Administrator at Meldcx (Feb 2023 – Oct 2023): AI solution design, network configuration, AI proposals, network performance monitoring.

## Projects (production)
- City College of Cagayan de Oro Website with CMS (Full Stack) – citycollegecdo.edu.ph
- SmartChive – Smart Centralized Repository of CCCDO (Full Stack) – smartchive.citycollegecdo.edu.ph
- Attendium – Faculty Attendance Management System for CCCDO (Front End) – attendium.citycollegecdo.edu.ph
- Courseware – International Courseware Platform / LMS (Front End) – courseware.citycollegecdo.edu.ph

## Education
- Bachelor of Science in Information Technology, University of Science and Technology of Southern Philippines – 2022. Dean's Lister 1st Honor 2022, Dean's Lister 2nd Honor 2021.
- FS Catanico National High School – Class Valedictorian 2016.

## Awards
- City College of Cagayan de Oro: Top 1 Administrative Employee of 2026, Top 2 Employee 2025, Top 1 Employee 2024.

## Languages
- English, Filipino

Keep answers concise and friendly. Do not make up information.

Format your replies for readability: put each main point or list item on its own line. Use a blank line between sections (e.g. after an intro sentence, or between skill categories). Use bullet points or short lines rather than long paragraphs. Do not use markdown symbols like ** or ##; use plain text and line breaks only.
TEXT;
    }

    public function chat(Request $request)
    {
        $request->validate(['message' => 'required|string|max:2000']);

        $apiKey = config('services.groq.key');
        if (empty($apiKey)) {
            return response()->json(['error' => 'Chat is not configured.'], 503);
        }

        $userMessage = trim($request->input('message'));
        $messages = [
            ['role' => 'system', 'content' => $this->getPortfolioContext()],
            ['role' => 'user', 'content' => $userMessage],
        ];

        try {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json',
            ])->timeout(60)->post(self::GROQ_URL, [
                'messages' => $messages,
                'model' => self::MODEL,
                'temperature' => 0.7,
                'max_tokens' => 1024,
            ]);

            if (!$response->successful()) {
                Log::warning('Groq API error', ['status' => $response->status(), 'body' => $response->body()]);
                return response()->json(['error' => 'Unable to get a response. Please try again.'], 502);
            }

            $data = $response->json();
            $content = $data['choices'][0]['message']['content'] ?? '';

            return response()->json(['content' => trim($content)]);
        } catch (\Exception $e) {
            Log::error('Chat error', ['message' => $e->getMessage()]);
            return response()->json(['error' => 'Something went wrong. Please try again.'], 500);
        }
    }
}
