const helloRoute = (req, res) => {
    res.send("Hello World");
};

const niyiRoute = (req, res) => {
    res.send("Hello Niyi");
};

const tomiRoute = (req, res) => {
    res.send("Hello Tomi");
};

module.exports = {
    helloRoute,
    niyiRoute,
    tomiRoute
};