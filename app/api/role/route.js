export async function POST(req) {
  try {
    const body = await req.json();

    // Create prompt for AI
    const prompt = `
     write a job description explanation in 4-5 line for the company ${body.experience} and for the role ${body.role}:
      company : ${body.experience}
      role : ${body.role}
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