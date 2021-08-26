const app = require("express")();
const PORT = process.env.PORT || 4000;
const jsonParser = require("body-parser").json();

app.post("/observer", jsonParser, function (req, res) {
  console.log(req.body);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
