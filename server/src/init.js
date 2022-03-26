import app from "./server";
import "./db";
import "./model/User";

const PORT = 9000;
app.listen(PORT, () => console.log(`✅ MOSS server listening on ${PORT}!!🔥`));
