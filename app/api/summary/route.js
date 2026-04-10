export async function POST(req) {
  try {
    const body = await req.json();

    // Create prompt for AI
 const prompt = `
Write a professional resume summary.

Details:
Name: ${body.name}
Profession: ${body.profession}
Skills: ${body.skills}
Projects: ${body.projects}

Instructions:
- Write exactly 3-4 lines only
- Keep it concise, impactful, and ATS-friendly
- Highlight key skills, experience, and project strengths
- Use strong professional language
- Do NOT include greetings, introductions, or the name
- Do NOT add extra explanation or formatting

Output only the summary.
`;

    // Send request to Groq API
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    // Convert response to JSON
    const data = await response.json();

    // Log full response for debugging
    console.log("OpenAI full response:", JSON.stringify(data));

    // Return only the summary
    return Response.json({
      summary:
        data.choices?.[0]?.message?.content || "No summary generated",
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      summary: "Error generating summary",
    });
  }
}