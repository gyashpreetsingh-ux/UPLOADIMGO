const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.uploadimgo.n9eq7sq.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);