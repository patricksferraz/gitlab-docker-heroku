const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send({ hello: "world, here is production" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
