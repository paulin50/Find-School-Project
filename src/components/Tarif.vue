<template>
    <div
      style="
        background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg);
      "
      class="jumbotron bg-cover text-white"
    >
      <div class="container py-5 text-center">
        <h1 class="display-4 font-weight-bold">Tarif</h1>
        <p class="font-italic mb-0"></p>
        <!--p class="font-italic">
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p-->
        <!--a href="#" role="button" class="btn btn-primary px-5">See All Features</a-->
      </div>
    </div>
    <div class="demo10">
            <div class="container">
                <h1 class="py-4 text-center">Tarification</h1>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">Standard</h3>
                                <span class="price-value">
                                    <span class="currency">$</span> 10
                                    <span class="month">/mo</span>
                                </span>
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>50GB Disk Space</li>
                                    <li>50 Email Accounts</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>10 Subdomains</li>
                                    <li>15 Domains</li>
                                </ul>
                                <a href="#" class="read">Acheter</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">Business</h3>
                                <span class="price-value">
                                    <span class="currency">$</span> 20
                                    <span class="month">/mo</span>
                                </span>
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>60GB Disk Space</li>
                                    <li>60 Email Accounts</li>
                                    <li>60GB Monthly Bandwidth</li>
                                    <li>15 Subdomains</li>
                                    <li>20 Domains</li>
                                </ul>
                                <a href="#" class="read">Acheter</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">Premium</h3>
                                <span class="price-value">
                                    <span class="currency">$</span> 30
                                    <span class="month">/mo</span>
                                </span>
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>70GB Disk Space</li>
                                    <li>70 Email Accounts</li>
                                    <li>70GB Monthly Bandwidth</li>
                                    <li>20 Subdomains</li>
                                    <li>25 Domains</li>
                                </ul>
                                <a href="#" class="read">Acheter</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable10">
                            <div class="pricingTable-header">
                                <h3 class="heading">Extra</h3>
                                <span class="price-value">
                                    <span class="currency">$</span> 40
                                    <span class="month">/mo</span>
                                </span>
                            </div>
                            <div class="pricing-content">
                                <ul>
                                    <li>80GB Disk Space</li>
                                    <li>80 Email Accounts</li>
                                    <li>80GB Monthly Bandwidth</li>
                                    <li>25 Subdomains</li>
                                    <li>30 Domains</li>
                                </ul>
                                <a href="#" class="read">Acheter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
.demo10{background:#C0BFBF;padding:30px 0}
.pricingTable10{text-align:center}
.pricingTable10 .pricingTable-header{padding:30px 0;background:#4d4d4d;position:relative;transition:all .3s ease 0s}
.pricingTable10:hover .pricingTable-header{background:#09b2c6}
.pricingTable10 .pricingTable-header:after,.pricingTable10 .pricingTable-header:before{content:"";width:16px;height:16px;border-radius:50%;border:1px solid #d9d9d8;position:absolute;bottom:12px}
.pricingTable10 .pricingTable-header:before{left:40px}
.pricingTable10 .pricingTable-header:after{right:40px}
.pricingTable10 .heading{font-size:20px;color:#fff;text-transform:uppercase;letter-spacing:2px;margin-top:0}
.pricingTable10 .price-value{display:inline-block;position:relative;font-size:55px;font-weight:700;color:#09b1c5;transition:all .3s ease 0s}
.pricingTable10:hover .price-value{color:#fff}
.pricingTable10 .currency{font-size:30px;font-weight:700;position:absolute;top:6px;left:-19px}
.pricingTable10 .month{font-size:16px;color:#fff;position:absolute;bottom:15px;right:-30px;text-transform:uppercase}
.pricingTable10 .pricing-content{padding-top:50px;background:#fff;position:relative}
.pricingTable10 .pricing-content:after,.pricingTable10 .pricing-content:before{content:"";width:16px;height:16px;border-radius:50%;border:1px solid #7c7c7c;position:absolute;top:12px}
.pricingTable10 .pricing-content:before{left:40px}
.pricingTable10 .pricing-content:after{right:40px}
.pricingTable10 .pricing-content ul{padding:0 20px;margin:0;list-style:none}
.pricingTable10 .pricing-content ul:after,.pricingTable10 .pricing-content ul:before{content:"";width:8px;height:46px;border-radius:3px;background:linear-gradient(to bottom,#818282 50%,#727373 50%);position:absolute;top:-22px;z-index:1;box-shadow:0 0 5px #707070;transition:all .3s ease 0s}
.pricingTable10:hover .pricing-content ul:after,.pricingTable10:hover .pricing-content ul:before{background:linear-gradient(to bottom,#40c4db 50%,#34bacc 50%)}
.pricingTable10 .pricing-content ul:before{left:44px}
.pricingTable10 .pricing-content ul:after{right:44px}
.pricingTable10 .pricing-content ul li{font-size:15px;font-weight:700;color:#777473;padding:10px 0;border-bottom:1px solid #d9d9d8}
.pricingTable10 .pricing-content ul li:last-child{border-bottom:none}
.pricingTable10 .read{display:inline-block;font-size:16px;color:#fff;text-transform:uppercase;background:#d9d9d8;padding:8px 25px;margin:30px 0;transition:all .3s ease 0s}
.pricingTable10 .read:hover{text-decoration:none}
.pricingTable10:hover .read{background:#09b1c5}
@media screen and (max-width:990px){.pricingTable10{margin-bottom:25px}
}
/* Credit to https://bootsnipp.com/snippets/92erW */



.jumbotron{
    margin-bottom: unset;
}
</style>