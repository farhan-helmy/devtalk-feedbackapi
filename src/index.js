import Express from "express";
import serverless from "serverless-http";

const app = Express();

app.get("/", (_, res) => {
    res.send("Hello World!");
});

app.post("/feedback", (req, res) => {
    console.log(req.body);
    res.send("Feedback received!");
})

const handler = serverless(app);

export { handler };
