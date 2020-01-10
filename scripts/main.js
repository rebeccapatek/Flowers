import { getFlowers } from "./FlowerDataProvider.js";
import flowerList from "./FlowerList.js";
import { getRetailers } from "./RetailerDataProvider.js";
import retailerList from "./RetailerList.js";



getFlowers().then(flowerList)
getRetailers().then(retailerList)