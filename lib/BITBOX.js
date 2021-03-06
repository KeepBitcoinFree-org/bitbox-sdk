"use strict";
/// <reference path="./interfaces/vendors.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
// imports
var Address_1 = require("./Address");
var BitcoinCash_1 = require("./BitcoinCash");
var Block_1 = require("./Block");
var Blockchain_1 = require("./Blockchain");
var Control_1 = require("./Control");
var Crypto_1 = require("./Crypto");
var ECPair_1 = require("./ECPair");
var Generating_1 = require("./Generating");
var HDNode_1 = require("./HDNode");
var Mining_1 = require("./Mining");
var Mnemonic_1 = require("./Mnemonic");
var Price_1 = require("./Price");
var RawTransactions_1 = require("./RawTransactions");
var Schnorr_1 = require("./Schnorr");
var Script_1 = require("./Script");
var Socket_1 = require("./Socket");
var Transaction_1 = require("./Transaction");
var TransactionBuilder_1 = require("./TransactionBuilder");
var Util_1 = require("./Util");
// import { Wallet } from "./Wallet"
// consts
exports.resturl = "https://rest.bitcoin.com/v2/";
var BITBOX = /** @class */ (function () {
    // Wallet: Wallet
    function BITBOX(config) {
        if (config === void 0) { config = {}; }
        if (config && config.restURL && config.restURL !== "")
            this.restURL = config.restURL;
        else
            this.restURL = exports.resturl;
        this.Address = new Address_1.Address(this.restURL);
        this.BitcoinCash = new BitcoinCash_1.BitcoinCash(this.Address);
        this.Block = new Block_1.Block(this.restURL);
        this.Blockchain = new Blockchain_1.Blockchain(this.restURL);
        this.Control = new Control_1.Control(this.restURL);
        this.Crypto = new Crypto_1.Crypto();
        this.ECPair = new ECPair_1.ECPair();
        this.Generating = new Generating_1.Generating(this.restURL);
        this.HDNode = new HDNode_1.HDNode(this.Address);
        this.Mining = new Mining_1.Mining(this.restURL);
        this.Mnemonic = new Mnemonic_1.Mnemonic(this.Address);
        this.Price = new Price_1.Price();
        this.RawTransactions = new RawTransactions_1.RawTransactions(this.restURL);
        this.Script = new Script_1.Script();
        this.Transaction = new Transaction_1.Transaction(this.restURL);
        this.TransactionBuilder = TransactionBuilder_1.TransactionBuilder;
        this.Util = new Util_1.Util(this.restURL);
        this.Socket = new Socket_1.Socket();
        this.Schnorr = new Schnorr_1.Schnorr();
        // this.Wallet = Wallet
    }
    return BITBOX;
}());
exports.BITBOX = BITBOX;
//# sourceMappingURL=BITBOX.js.map