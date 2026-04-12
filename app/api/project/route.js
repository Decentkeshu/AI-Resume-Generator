export async function POST(req) {
  try {
    const body = await req.json();

    const prompt = `
Write a concise and professional resume project description.

Project: ${body.projectName}
Skills/Technologies Used: ${body.skills}

Instructions:
- Start with the heading in this exact format: **${body.projectName}** | tech1 · tech2 · tech3
- Use exactly "${body.projectName}" as the project name, do not change or replace it
- Then write exactly 4-5 bullet points, each on a strictly new line
- Use strong action verbs (e.g., Developed, Built, Implemented)
- Focus on impact, features, and technologies used
- Do NOT include any introduction, explanation, or greeting
- Keep it ATS-friendly and professional tone

Format the output exactly like this:
**${body.projectName}** | tech1 · tech2 · tech3

- Point one here
- Point two here
- Point three here
- Point four here

Output only the description in the above format, nothing else.
`;

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
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );

    const data = await response.json();

    return Response.json({
      description: data.choices?.[0]?.message?.content || "No description generated",
    });
  } catch (error) {
    console.log(error);
    return Response.json({ description: "Error generating description" });
  }
}