export async function POST(req) {
  try {
    const body = await req.json();

    // Create prompt for AI
  const prompt = `
Write a professional resume job description.

Company: ${body.experience}
Role: ${body.role}

Instructions:
- First line must be the heading in this exact format: **Company Name** | Role Title
- Then write exactly 4-5 bullet points describing the role
- Start each bullet with a strong action verb (e.g., Managed, Developed, Led, Implemented)
- Focus on responsibilities, achievements, and impact
- Keep it ATS-friendly and professional
- Do NOT include any introduction, explanation, or extra text

Output only the description, starting with the heading.
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
      description:
        data.choices?.[0]?.message?.content || "No summary generated",
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      summary: "Error generating summary",
    });
  }
}