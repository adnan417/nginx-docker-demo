import express from "express";
import path from "path";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'public')));


app.get('/api/hello', (_req, res) => {
    console.log(`Request received at App Server: ${process.env.APP_NAME}`);
    res.json({ message: 'Hello from TypeScript + Express' });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});