import { getFlowers } from "./Flowers/FlowerDataProvider.js";
import flowerList from "./Flowers/FlowerList.js";
import { getRetailers } from "./Retailers/RetailerDataProvider.js";
import retailerList from "./Retailers/RetailerList.js";
import { getDistributors } from "./Distributors/DistributorDataProvider.js";
import { getNurseries } from "./Nurseries/NurseryDataProvider.js";
import { getDistributorNurseries } from "./distributornurseryDataProvider.js";
import { getNuseryflowers } from "./nuseryflowerDataProvider.js";
getFlowers().then(flowerList)
getRetailers()
.then(getDistributors)
.then(getNurseries)
.then(getDistributorNurseries)
.then(getNuseryflowers)
.then(retailerList)
    
                       
