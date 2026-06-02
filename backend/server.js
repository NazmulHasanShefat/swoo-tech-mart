const express = require("express");
const dns = require("node:dns");
const dotenv = require("dotenv");
dns.setServers(["1.1.1.1","8.8.8.8"]);
dotenv.config();

