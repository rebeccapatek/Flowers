import { getFlowers } from "./Flowers/FlowerDataProvider.js";
import flowerList from "./Flowers/FlowerList.js";
import { getRetailers } from "./Retailers/RetailerDataProvider.js";
import retailerList from "./Retailers/RetailerList.js";
import { getDistributors } from "./Distributors/DistributorDataProvider.js";



getFlowers().then(flowerList)
getDistributors()
getRetailers().then(retailerList)