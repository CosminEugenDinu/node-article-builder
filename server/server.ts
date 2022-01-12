import express from "express";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../client/components/app";
import {marked} from "marked";


const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static/public")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/public/js/manifest.json"),
  "utf-8"
);
const assets = JSON.parse(manifest);

server.get("/", (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render("client", { assets, component });
});

server.get("/articles", (req, res) => {
  res.render("articles/article", {title: "Mate", component: "some component", assets})
})

server.get("/articles/ec-dif-ord-n-intro", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/mate/ecuatii-diferentiale/ec-dif-ord-n-intro.md"));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Curs ec dif", mathcontent: html})
})

server.get("/articles/ec-dif-lin-ord-1-omo-neomo", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/mate/ecuatii-diferentiale/ec-dif-lin-ord-1-omo-neomo.md"));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Curs ec dif", mathcontent: html})
})
server.get("/articles/mate/ecuatii-diferentiale/aplicatii-ec-dif-lin-ord-1-nelin-ord-1-red-la-ec-lin", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/mate/ecuatii-diferentiale/aplicatii-ec-dif-lin-ord-1-nelin-ord-1-red-la-ec-lin.md"));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Curs ec dif", mathcontent: html})
})

server.get("/articles/mate/ecuatii-diferentiale/ec-dif-lin-ord-n-omo-neomo", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/mate/ecuatii-diferentiale/ec-dif-lin-ord-n-omo-neomo.md"));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Curs ec dif", mathcontent: html})
})

server.get("/articles/mate/ecuatii-diferentiale/ec-dif-lin-ord-1-aplicatii", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/mate/ecuatii-diferentiale/ec-dif-lin-ord-1-aplicatii.md"));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Exercitii Ec Dif", mathcontent: html})
})

const articleName = "aplicatii-ec-dif-lin-ord-n";
const link = `/articles/mate/ecuatii-diferentiale/${articleName}`;
server.get(link, async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, `static/public/articles/mate/ecuatii-diferentiale/${articleName}.md`));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Exercitii Ec Dif", mathcontent: html})
})

const articleName2 = "ec-dif-lin-ord-n-neomo";
const link2 = `/articles/mate/ecuatii-diferentiale/${articleName2}`;
server.get(link2, async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, `static/public/articles/mate/ecuatii-diferentiale/${articleName2}.md`));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Exercitii Ec Dif", mathcontent: html})
})

// # 7
server.get("/articles/mate/ecuatii-diferentiale/sist-ec-dif-lin-ord-1", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, `static/public/articles/mate/ecuatii-diferentiale/sist-ec-dif-lin-ord-1.md`));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Exercitii Ec Dif", mathcontent: html})
})

// # 8
const artName8 = "ap-recap-lc";
const link8 = `/articles/mate/ecuatii-diferentiale/${artName8}`
server.get(link8, async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, `static/public/articles/mate/ecuatii-diferentiale/${artName8}.md`));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Exercitii Ec Dif", mathcontent: html})
})

// # 9
const artName9 = "ap-recap-lc2";
const link9 = `/articles/mate/ecuatii-diferentiale/${artName9}`
server.get(link9, async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, `static/public/articles/mate/ecuatii-diferentiale/${artName9}.md`));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Exercitii Ec Dif", mathcontent: html})
})

const articleName3 = "aplicatii-sist-ec-dif-lin-omo-ord-1-ct";
const link3 = `/articles/mate/ecuatii-diferentiale/${articleName3}`;
server.get(link3, async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, `static/public/articles/mate/ecuatii-diferentiale/${articleName3}.md`));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view", {title: "Exercitii Ec Dif", mathcontent: html})
})

server.get("/articles/mate/ecuatii-diferentiale/exercitii", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/mate/ecuatii-diferentiale/exercitii/exercitii.md"));
  const html = marked.parse(md.toString());
  // res.header("Access-Control-Allow-Origin", "*");
  res.render("articles/math-view",
  {title: "Exercitii Ec Dif", mathcontent: html})
})

server.get("/articles/sport/an2s1", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/sport/an2s1.md"));
  const html = marked.parse(md.toString());
  res.render("articles/essay-view", {
    title: "Exerciţii",
    content: html 
  });
})

server.get("/articles/chimie/bariu", async (req, res) => {
  const md = await fsPromises.readFile(path.join(__dirname, "static/public/articles/chimie/bariu/bariu.md"));
  const html = marked.parse(md.toString());
  res.render("articles/chem-view", {
    lang: "ro",
    title: "Bariu",
    chemcontent: html 
  });
})


server.listen(3000, () => {
  // const ip = require("os").networkInterfaces()['eth0'][0].address;
  const ip = "localhost";
  console.log(`Server running on http://${ip}:3000`);
});
