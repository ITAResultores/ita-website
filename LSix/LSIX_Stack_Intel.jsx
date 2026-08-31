import React, { useState, useMemo } from "react";

const RAW = {"sites":[{"n":"Mercado Libre","d":"mercadolibre.com.mx","c":"Marketplace","crm":"Sí","v":["Contentsquare","GA4","Hotjar"],"src":["red","html"],"b":false,"rq":176,"gtm":""},{"n":"Amazon México","d":"amazon.com.mx","c":"Marketplace","crm":"Sí","v":["Contentsquare"],"src":["html"],"b":false,"rq":50,"gtm":""},{"n":"Temu","d":"temu.com","c":"Marketplace","crm":"No","v":["GA4","Google Ads / gtag","Taboola"],"src":["html"],"b":false,"rq":103,"gtm":""},{"n":"AliExpress","d":"aliexpress.com","c":"Marketplace","crm":"No","v":[],"src":[],"b":true,"rq":2,"gtm":""},{"n":"Shein","d":"shein.com.mx","c":"Marketplace","crm":"No","v":["Admitad","Awin","Emarsys (SAP)","GA4","Google Ads / gtag","HubSpot","Zendesk"],"src":["html"],"b":false,"rq":145,"gtm":""},{"n":"Claro Shop (Grupo Carso)","d":"claroshop.com","c":"Marketplace","crm":"No","v":["Algolia","AppNexus (Xandr legacy)","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Oracle BlueKai","RTB House","Singular","Taboola","TikTok Pixel","Xandr / AppNexus","Yotpo"],"src":["red","html"],"b":false,"rq":134,"gtm":"GTM-K7PM8MQ"},{"n":"Liverpool","d":"liverpool.com.mx","c":"Departamental","crm":"Sí","v":["AppsFlyer","Bazaarvoice","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Microsoft Ads (UET)","RTB House","Salesforce Marketing Cloud","TikTok Pixel"],"src":["html"],"b":false,"rq":9,"gtm":"GTM-KM2VZFW"},{"n":"Suburbia","d":"suburbia.com.mx","c":"Departamental","crm":"No","v":["AppsFlyer","Bazaarvoice","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Meta Pixel","Microsoft Ads (UET)","Pinterest Tag","RTB House","Salesforce Marketing Cloud","TikTok Pixel"],"src":["red","html"],"b":false,"rq":82,"gtm":"GTM-KM2VZFW, GTM-P99XGLW"},{"n":"El Palacio de Hierro","d":"elpalaciodehierro.com","c":"Departamental","crm":"No","v":["AppsFlyer","Bazaarvoice","Cloudflare","Contentsquare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","HubSpot","Insider","Meta Pixel","Pinterest Tag","RTB House","Salesforce Commerce Cloud","Salesforce Marketing Cloud","Soicos","TikTok Pixel"],"src":["red","html"],"b":false,"rq":133,"gtm":"GTM-S9GP"},{"n":"Sears México (Grupo Carso)","d":"sears.com.mx","c":"Departamental","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Sanborns","d":"sanborns.com.mx","c":"Departamental","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Coppel","d":"coppel.com","c":"Departamental","crm":"Sí","v":["Emarsys (SAP)","GA4","Google Tag Manager"],"src":["red"],"b":false,"rq":300,"gtm":"GTM-MLFDXSFC, GTM-MQC5RG5C, GTM-NL3WNDZV, GTM-NVKCT9W5, GTM-NXQMNBJG, GTM-P3VZMZXT, GTM-T58P8MMW, GTM-TD6ZZHT4, GTM-WTBN8XVR"},{"n":"Elektra","d":"elektra.mx","c":"Departamental","crm":"Sí","v":["Adobe Analytics","Adobe Audience Manager","AppNexus (Xandr legacy)","AppsFlyer","Awin","Cloudflare","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Intercom","Meta Pixel","Microsoft Ads (UET)","Pinterest Tag","Soicos","Tealium","TikTok Pixel","VTEX","Xandr / AppNexus"],"src":["red","html"],"b":false,"rq":143,"gtm":"GTM-P7K53B9"},{"n":"Walmart de México","d":"walmart.com.mx","c":"Autoservicio / Grocery","crm":"Sí","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Bodega Aurrera","d":"bodegaaurrera.com.mx","c":"Autoservicio / Grocery","crm":"Sí","v":["Adobe Analytics","Adobe Audience Manager","GA4"],"src":["red","html"],"b":false,"rq":38,"gtm":""},{"n":"Sam's Club México","d":"sams.com.mx","c":"Autoservicio / Grocery","crm":"No","v":["Adobe Analytics","Adobe Audience Manager","GA4"],"src":["red","html"],"b":false,"rq":41,"gtm":""},{"n":"Costco México","d":"costco.com.mx","c":"Autoservicio / Grocery","crm":"No","v":["Bazaarvoice","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager"],"src":["red","html"],"b":false,"rq":418,"gtm":"GTM-PVSS4SK"},{"n":"Soriana","d":"soriana.com","c":"Autoservicio / Grocery","crm":"Sí","v":["Cloudflare","GA4"],"src":["red","html"],"b":false,"rq":12,"gtm":""},{"n":"Chedraui","d":"chedraui.com.mx","c":"Autoservicio / Grocery","crm":"Sí","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"La Comer","d":"lacomer.com.mx","c":"Autoservicio / Grocery","crm":"No","v":[],"src":[],"b":true,"rq":4,"gtm":""},{"n":"HEB México","d":"heb.com.mx","c":"Autoservicio / Grocery","crm":"No","v":["Amazon Ads","Bloomreach","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Meta Pixel","Microsoft Ads (UET)","Singular","TikTok Pixel"],"src":["red","html"],"b":false,"rq":114,"gtm":"GTM-MDLCJGHZ, GTM-P4HR233H"},{"n":"Rappi","d":"rappi.com.mx","c":"Delivery / QSR","crm":"Sí","v":["AppsFlyer","Braze","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Microsoft Ads (UET)","Singular","Teads","TikTok Pixel"],"src":["red","html"],"b":false,"rq":121,"gtm":"GTM-WJZNQMX"},{"n":"Uber Eats México","d":"ubereats.com","c":"Delivery / QSR","crm":"No","v":["Adobe Analytics","Amazon Ads","Cloudflare","Criteo","GA4","Google Ads / gtag","Intercom","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","Outbrain","Singular","Snap Pixel","Tealium","The Trade Desk","TikTok Pixel","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":136,"gtm":""},{"n":"DiDi Food México","d":"didiglobal.com","c":"Delivery / QSR","crm":"No","v":["Awin","GA4","Meta Pixel"],"src":["red","html"],"b":false,"rq":51,"gtm":""},{"n":"Jüsto","d":"justo.mx","c":"Autoservicio / Grocery","crm":"No","v":["Algolia","Cloudflare","GA4","Google Tag Manager","LiveRamp","Segment","TikTok Pixel"],"src":["red","html"],"b":false,"rq":198,"gtm":"GTM-M2CF26XG"},{"n":"Alsea (Domino's / Starbucks / BK / Vips)","d":"alsea.com.mx","c":"Delivery / QSR","crm":"Sí","v":["GA4","Google Tag Manager"],"src":["red","html"],"b":false,"rq":69,"gtm":"GTM-W3FHXCVX"},{"n":"McDonald's México (Arcos Dorados)","d":"mcdonalds.com.mx","c":"Delivery / QSR","crm":"No","v":["DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Meta Pixel","Microsoft Clarity","TikTok Pixel","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":96,"gtm":"GTM-M3L33JX"},{"n":"KFC México (Yum!)","d":"kfc.com.mx","c":"Delivery / QSR","crm":"No","v":["GA4"],"src":["html"],"b":false,"rq":71,"gtm":""},{"n":"Little Caesars México","d":"littlecaesars.com.mx","c":"Delivery / QSR","crm":"No","v":["Amazon Ads","Criteo","GA4","Google Ads / gtag","Google Tag Manager","Kochava","Meta Pixel","Outbrain","Taboola","The Trade Desk","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":76,"gtm":"GTM-TM9J6BJ"},{"n":"Farmacias del Ahorro","d":"fahorro.com","c":"Farmacia","crm":"Sí","v":["Adobe Analytics","Adobe Audience Manager","Adobe Commerce (Magento)","Criteo","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","LinkedIn Insight","Meta Pixel","Microsoft Ads (UET)","RTB House","TikTok Pixel"],"src":["red","html"],"b":false,"rq":106,"gtm":"GTM-P6QK8GFJ"},{"n":"Farmacias Guadalajara","d":"farmaciasguadalajara.com","c":"Farmacia","crm":"Sí","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Farmacias Benavides","d":"benavides.com.mx","c":"Farmacia","crm":"No","v":["Adobe Commerce (Magento)","AppsFlyer","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Meta Pixel","Microsoft Clarity","TikTok Pixel"],"src":["red","html"],"b":false,"rq":188,"gtm":"GTM-NWNRF9Q"},{"n":"Farmacias San Pablo","d":"farmaciasanpablo.com.mx","c":"Farmacia","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Farmacias Similares","d":"farmaciasdesimilares.com","c":"Farmacia","crm":"No","v":["Contentsquare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Meta Pixel","TikTok Pixel","VTEX"],"src":["red","html"],"b":false,"rq":399,"gtm":"GTM-5X3CMXD"},{"n":"Sephora México","d":"sephora.com.mx","c":"Beauty","crm":"Sí","v":["Acuity Ads / illumin","DoubleClick Floodlight / DV360 / CM360","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Ogury","Quantcast","RTB House","Smarterclick"],"src":["ghostery"],"b":false,"rq":1,"gtm":""},{"n":"Grisi","d":"grisi.com","c":"Beauty","crm":"Sí","v":["DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager"],"src":["red","html"],"b":false,"rq":63,"gtm":"GTM-NLMWRGQP"},{"n":"Natura &Co (Natura / Avon)","d":"natura.com.mx","c":"Beauty","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Mary Kay México","d":"marykay.com.mx","c":"Beauty","crm":"No","v":["Cloudflare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Salesforce Commerce Cloud","Salesforce Marketing Cloud"],"src":["red","html"],"b":false,"rq":100,"gtm":"GTM-TBN3TQR6"},{"n":"Jafra","d":"jafra.com.mx","c":"Beauty","crm":"No","v":["Awin","Cloudflare","GA4","Google Tag Manager","Microsoft Clarity","Shopify","VTEX","Yotpo"],"src":["red","html"],"b":false,"rq":274,"gtm":""},{"n":"Sally Beauty México","d":"sallybeauty.com.mx","c":"Beauty","crm":"No","v":["DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Meta Pixel","Microsoft Clarity","TikTok Pixel","VTEX"],"src":["red","html"],"b":false,"rq":277,"gtm":"GTM-4A0B20B, GTM-PP552LP6"},{"n":"Zara / Inditex México","d":"zara.com/mx","c":"Moda / Calzado","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"H&M México","d":"hm.com/mx","c":"Moda / Calzado","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"C&A México","d":"cyamoda.com","c":"Moda / Calzado","crm":"No","v":["Cloudflare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","ID5","LinkedIn Insight","LiveRamp","Lotame","Meta Pixel","Microsoft Clarity","Pinterest Tag","Salesforce Commerce Cloud","Shopify","The Trade Desk","TikTok Pixel","Yahoo DSP","Zendesk"],"src":["red","html"],"b":false,"rq":224,"gtm":"GTM-T58RBTG"},{"n":"Shasa","d":"shasa.com","c":"Moda / Calzado","crm":"No","v":["Cloudflare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","HubSpot","Klaviyo","Meta Pixel","Microsoft Clarity","Shopify","TikTok Pixel","Zendesk"],"src":["red","html"],"b":false,"rq":331,"gtm":"GTM-N5FBJ8H"},{"n":"Andrea","d":"andrea.com","c":"Moda / Calzado","crm":"No","v":["Admitad","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","RTB House","VTEX"],"src":["red"],"b":false,"rq":165,"gtm":"GTM-PM44RKR"},{"n":"Price Shoes","d":"priceshoes.com","c":"Moda / Calzado","crm":"No","v":["Awin","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Microsoft Clarity","TikTok Pixel"],"src":["red","html"],"b":false,"rq":114,"gtm":"GTM-PMSWCC6"},{"n":"Flexi","d":"flexi.com.mx","c":"Moda / Calzado","crm":"No","v":[],"src":[],"b":true,"rq":4,"gtm":""},{"n":"Cuadra","d":"cuadra.com.mx","c":"Moda / Calzado","crm":"No","v":["Admitad","Cloudflare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Klaviyo","Meta Pixel","Pinterest Tag","Shopify","TikTok Pixel","Yotpo"],"src":["red","html"],"b":false,"rq":321,"gtm":"GTM-MD865DGX"},{"n":"Nike México","d":"nike.com/mx","c":"Deportes","crm":"No","v":["Adobe Analytics","AppsFlyer","GA4","Meta Pixel","RTB House"],"src":["html"],"b":false,"rq":172,"gtm":""},{"n":"Adidas México","d":"adidas.mx","c":"Deportes","crm":"No","v":["Tealium"],"src":["red","html"],"b":false,"rq":12,"gtm":""},{"n":"YO Mobile México","d":"mx.yomobile.com","c":"Telco / MVNO","crm":"Sí","v":["Adobe Commerce (Magento)", "AppsFlyer", "DoubleClick Floodlight / DV360 / CM360", "Google Ads / gtag", "Google Dynamic Remarketing", "Google Tag Manager", "Meta Pixel"],"src":["red","html"],"b":false,"rq":80,"gtm":"GTM-WM6MKZ3W"},
  {"n":"Innovasport","d":"innovasport.com","c":"Deportes","crm":"No","v":["Admitad","Algolia","AppsFlyer","Awin","Bazaarvoice","Cloudflare","Criteo","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Hotjar","LinkedIn Insight","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","RTB House","SAP Commerce","Taboola","TikTok Pixel","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":313,"gtm":"GTM-MRFDTGD"},{"n":"Martí","d":"marti.mx","c":"Deportes","crm":"No","v":["Bazaarvoice","Contentsquare","Criteo","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Intercom","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","RTB House","Taboola","TikTok Pixel","VTEX"],"src":["html"],"b":false,"rq":1,"gtm":"GTM-K46QC2Z"},{"n":"Dportenis","d":"dportenis.mx","c":"Deportes","crm":"No","v":["Contentsquare","GA4","Google Ads / gtag","Google Tag Manager","Meta Pixel","Salesforce Marketing Cloud","TikTok Pixel"],"src":["red","html"],"b":false,"rq":524,"gtm":"GTM-54PXR9B"},{"n":"Calzzapato","d":"calzzapato.com","c":"Moda / Calzado","crm":"No","v":["DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Microsoft Clarity","Shopify"],"src":["red","html"],"b":false,"rq":286,"gtm":"GTM-5KJJF54"},{"n":"Decathlon México","d":"decathlon.com.mx","c":"Deportes","crm":"No","v":["Cloudflare"],"src":["red"],"b":false,"rq":15,"gtm":""},{"n":"Apple México","d":"apple.com/mx","c":"Electrónica / Tech","crm":"No","v":["Adobe Analytics","Contentsquare","GA4"],"src":["html"],"b":false,"rq":76,"gtm":""},{"n":"iShop (Grupo Mixup)","d":"ishopmixup.com","c":"Electrónica / Tech","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Samsung México","d":"samsung.com/mx","c":"Electrónica / Tech","crm":"No","v":["Adobe Analytics","Adobe Audience Manager","Awin","Bazaarvoice","Contentsquare","Criteo","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","MediaMath","SAP Commerce","Taboola","Tealium","Yahoo DSP"],"src":["red","html"],"b":false,"rq":109,"gtm":""},{"n":"Xiaomi México","d":"mi.com/mx","c":"Electrónica / Tech","crm":"No","v":["Awin","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","LiveRamp","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","MoEngage","TikTok Pixel","X / Twitter Pixel"],"src":["html"],"b":false,"rq":2,"gtm":"GTM-5KRKGGMR, GTM-N7BDPG6"},{"n":"Steren","d":"steren.com.mx","c":"Electrónica / Tech","crm":"No","v":["Adobe Commerce (Magento)","Awin","Cloudflare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","HubSpot","Intercom","Meta Pixel","Pinterest Tag","TikTok Pixel","VTEX"],"src":["red","html"],"b":false,"rq":166,"gtm":"GTM-TT936SK"},{"n":"Cyberpuerta","d":"cyberpuerta.mx","c":"Electrónica / Tech","crm":"No","v":["DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager"],"src":["red","html"],"b":false,"rq":134,"gtm":""},{"n":"RadioShack México","d":"radioshack.com.mx","c":"Electrónica / Tech","crm":"No","v":["Adform","Admitad","Cloudflare","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Tag Manager","Meta Pixel","Microsoft Clarity","RTB House","TikTok Pixel"],"src":["red","html"],"b":false,"rq":275,"gtm":"GTM-5FBJV7"},{"n":"Home Depot México","d":"homedepot.com.mx","c":"Hogar / Oficina / Variedad","crm":"Sí","v":["Admitad","Adobe Analytics","Adobe Audience Manager","Algolia","Bazaarvoice","Contentsquare","Criteo","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Microsoft Ads (UET)","Pinterest Tag","RTB House","Rakuten Advertising","Soicos","TikTok Pixel","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":181,"gtm":"GTM-TSRHVNK"},{"n":"Sodimac México","d":"sodimac.com.mx","c":"Hogar / Oficina / Variedad","crm":"No","v":["Adobe Analytics","AppsFlyer","Awin","Cloudflare","Contentsquare","Criteo","DoubleClick Floodlight / DV360 / CM360","Dynamic Yield","GA4","Google Ads / gtag","Google Tag Manager","LiveRamp","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","Pinterest Tag","RTB House","Salesforce Marketing Cloud","TikTok Pixel","VTEX"],"src":["red","html"],"b":false,"rq":202,"gtm":"GTM-MCX5LCV"},{"n":"IKEA México","d":"ikea.com/mx","c":"Hogar / Oficina / Variedad","crm":"No","v":["Contentsquare","GA4"],"src":["html"],"b":false,"rq":145,"gtm":""},{"n":"Gaia Design","d":"gaiadesign.com.mx","c":"Hogar / Oficina / Variedad","crm":"No","v":["Contentsquare","GA4","Google Ads / gtag","Klaviyo","Microsoft Clarity","Shopify","TikTok Pixel"],"src":["red","html"],"b":false,"rq":249,"gtm":""},{"n":"Office Depot México","d":"officedepot.com.mx","c":"Hogar / Oficina / Variedad","crm":"No","v":["Adform","Admitad","Awin","Cloudflare","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Klaviyo","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","RTB House","SAP Commerce","Soicos","Taboola","TikTok Pixel","VTEX","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":200,"gtm":"GTM-56PS9J8"},{"n":"Waldo's","d":"waldos.com.mx","c":"Hogar / Oficina / Variedad","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Miniso México","d":"miniso.com.mx","c":"Hogar / Oficina / Variedad","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Tiendas Del Sol / Woolworth","d":"delsol.com.mx","c":"Departamental","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Volaris","d":"volaris.com","c":"Travel / Movilidad","crm":"Sí","v":["AppNexus (Xandr legacy)","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Meta Pixel","Microsoft Ads (UET)","RTB House","Tealium","The Trade Desk","Xandr / AppNexus"],"src":["red","html"],"b":false,"rq":184,"gtm":"GTM-S4SJ"},{"n":"Viva","d":"vivaaerobus.com","c":"Travel / Movilidad","crm":"Sí","v":["GA4"],"src":["html"],"b":true,"rq":2,"gtm":""},{"n":"Aeroméxico","d":"aeromexico.com","c":"Travel / Movilidad","crm":"Sí","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Despegar México","d":"despegar.com.mx","c":"Travel / Movilidad","crm":"No","v":[],"src":[],"b":true,"rq":6,"gtm":""},{"n":"PriceTravel","d":"pricetravel.com","c":"Travel / Movilidad","crm":"No","v":["Admitad","Algolia","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Microsoft Ads (UET)","MoEngage","TikTok Pixel"],"src":["red","html"],"b":false,"rq":110,"gtm":"GTM-K79L3DNV"},{"n":"Best Day","d":"bestday.com.mx","c":"Travel / Movilidad","crm":"No","v":[],"src":[],"b":true,"rq":9,"gtm":""},{"n":"Grupo Posadas (Fiesta Americana)","d":"posadas.com","c":"Travel / Movilidad","crm":"No","v":["Admitad","Amazon Ads","Contentsquare","Criteo","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Hotjar","LinkedIn Insight","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","Pinterest Tag","RTB House","Soicos","Taboola","TikTok Pixel"],"src":["red","html"],"b":false,"rq":147,"gtm":"GTM-K9BF787, GTM-KDXDKJZ7, GTM-KVQFZZZH, GTM-M44H2TWH, GTM-MNHSB9X6, GTM-P4G3NR6K, GTM-WLNRQ7XN"},{"n":"Hoteles City Express","d":"cityexpress.com","c":"Travel / Movilidad","crm":"No","v":["Adobe Analytics","Adobe Audience Manager","AppNexus (Xandr legacy)","DoubleClick Floodlight / DV360 / CM360","FullStory","GA4","Google Ads / gtag","Microsoft Ads (UET)","Partnerize","The Trade Desk","Xandr / AppNexus","Yahoo DSP"],"src":["red","html"],"b":false,"rq":198,"gtm":""},{"n":"ADO","d":"ado.com.mx","c":"Travel / Movilidad","crm":"No","v":["DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","HubSpot","Meta Pixel","VTEX","Zendesk"],"src":["red","html"],"b":false,"rq":176,"gtm":"GTM-PCS8N3B"},{"n":"Cinépolis","d":"cinepolis.com","c":"Entretenimiento / Ticketing","crm":"Sí","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Cinemex","d":"cinemex.com","c":"Entretenimiento / Ticketing","crm":"No","v":["Admitad","Awin","Contentsquare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Hotjar","Insider","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","Pinterest Tag","Salesforce Marketing Cloud","TikTok Pixel","VTEX","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":200,"gtm":"GTM-T9NZ56T"},{"n":"Ticketmaster México (OCESA)","d":"ticketmaster.com.mx","c":"Entretenimiento / Ticketing","crm":"No","v":["Google Tag Manager"],"src":["red"],"b":false,"rq":29,"gtm":"GTM-5MZG6PB6, GTM-5TNTJSSJ, GTM-K4QMLG, GTM-M6BK9TM5, GTM-N93JW5V, GTM-NMC3FK4, GTM-NMSNF2L, GTM-PLDTF3KT, GTM-PSVWZZC, GTM-TB7ZTT2, GTM-TT3LTJWW, GTM-WW62QPR"},{"n":"Boletia","d":"boletia.com","c":"Entretenimiento / Ticketing","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"AutoZone México","d":"autozone.com.mx","c":"Auto","crm":"No","v":["Adobe Analytics","Adobe Audience Manager","Google Ads / gtag","Google Dynamic Remarketing","Meta Pixel","Tealium"],"src":["red","html"],"b":false,"rq":55,"gtm":""},{"n":"Kavak","d":"kavak.com/mx","c":"Auto","crm":"No","v":[],"src":[],"b":true,"rq":1,"gtm":""},{"n":"Italika","d":"italika.mx","c":"Auto","crm":"No","v":["Adobe Analytics","Adobe Audience Manager","Cloudflare","Contentsquare","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Microsoft Clarity","RTB House","SAP Commerce","TikTok Pixel"],"src":["red","html"],"b":false,"rq":275,"gtm":"GTM-NBVGGJRV, GTM-NH38TGW"},{"n":"Petco México","d":"petco.com.mx","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["Adform","Amazon Ads","Cloudflare","Contentsquare","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Tag Manager","Meta Pixel","RTB House","TikTok Pixel"],"src":["red","html"],"b":false,"rq":508,"gtm":"GTM-NRNT24"},{"n":"+Kota","d":"maskota.com.mx","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["Cloudflare","Contentsquare","GA4","Google Ads / gtag","Google Dynamic Remarketing","Meta Pixel","Shopify","TikTok Pixel"],"src":["red","html"],"b":false,"rq":220,"gtm":""},{"n":"Librerías Gandhi","d":"gandhi.com.mx","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["Awin","Bazaarvoice","Connectif","Contentsquare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Intercom","Meta Pixel","Microsoft Clarity","Soicos","TikTok Pixel","VTEX"],"src":["red","html"],"b":false,"rq":87,"gtm":"GTM-TM6PXGTV"},{"n":"Porrúa","d":"porrua.mx","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["Adobe Commerce (Magento)","GA4","Meta Pixel"],"src":["red","html"],"b":false,"rq":116,"gtm":""},{"n":"Juguetrón","d":"juguetron.mx","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["Algolia","Awin","Connectif","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Hotjar","Intercom","Meta Pixel","Microsoft Clarity","Pinterest Tag","Salesforce Marketing Cloud","Shopify","TikTok Pixel","VTEX","Zendesk"],"src":["red","html"],"b":false,"rq":149,"gtm":"GTM-57SQR5N3"},{"n":"Julio Cepeda Jugueterías","d":"juliocepeda.com","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Shopify"],"src":["red","html"],"b":false,"rq":182,"gtm":"GTM-5X5Q6F"},{"n":"Ópticas Devlyn","d":"devlyn.com.mx","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["GA4","Google Ads / gtag","Google Tag Manager","Hotjar","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","TikTok Pixel","VTEX"],"src":["red"],"b":false,"rq":131,"gtm":"GTM-KV7VF5N"},{"n":"Enviaflores","d":"enviaflores.com","c":"Nicho (mascotas, libros, juguetes, óptica, regalos)","crm":"No","v":["Awin","CleverTap","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Hotjar","Meta Pixel","Microsoft Ads (UET)","Singular","Soicos","TikTok Pixel","VTEX"],"src":["red","html"],"b":false,"rq":209,"gtm":"GTM-NZPDMCDQ"},{"n":"Mercado Pago","d":"mercadopago.com.mx","c":"Fintech / BNPL / Wallet","crm":"Sí","v":["Adjust","Amazon Ads","Awin","Contentsquare","Criteo","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","HubSpot","LinkedIn Insight","Meta Pixel","Microsoft Ads (UET)","Outbrain","Pinterest Tag","RTB House","Shopify","TikTok Pixel","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":99,"gtm":"GTM-NRDZZ97"},{"n":"Kueski Pay","d":"kueskipay.com","c":"Fintech / BNPL / Wallet","crm":"Sí","v":["Amazon Ads","Braze","Criteo","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Tag Manager","Hotjar","HubSpot","Meta Pixel","Microsoft Ads (UET)","Singular","TikTok Pixel"],"src":["red","html"],"b":false,"rq":210,"gtm":"GTM-TMLW9N2, GTM-W2DRGQD"},{"n":"Aplazo","d":"aplazo.mx","c":"Fintech / BNPL / Wallet","crm":"No","v":["Adjust","Algolia","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Hotjar","HubSpot","LinkedIn Insight","Meta Pixel","Pinterest Tag","Soicos","TikTok Pixel","X / Twitter Pixel"],"src":["red","html"],"b":false,"rq":123,"gtm":"GTM-TXFSFDT"},{"n":"Telcel (Tienda en línea / Mi Telcel)","d":"telcel.com","c":"Telco","crm":"Sí","v":["Adobe Analytics","Adobe Audience Manager","AppNexus (Xandr legacy)","DoubleClick Floodlight / DV360 / CM360","Emarsys (SAP)","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Hotjar","LiveRamp","Lotame","Meta Pixel","Microsoft Ads (UET)","Microsoft Clarity","Retargetly","Salesforce Marketing Cloud","The Trade Desk","TikTok Pixel","X / Twitter Pixel","Xandr / AppNexus"],"src":["red"],"b":false,"rq":257,"gtm":"GTM-M8HM3D"},{"n":"AT&T México","d":"att.com.mx","c":"Telco","crm":"No","v":["Contentsquare","DoubleClick Floodlight / DV360 / CM360","GA4","Google Ads / gtag","Google Dynamic Remarketing","Google Tag Manager","Meta Pixel","RTB House","Retargetly","TikTok Pixel","VTEX"],"src":["red","html"],"b":false,"rq":104,"gtm":"GTM-584W669, GTM-PLX3S6J"},{"n":"Spin by OXXO (Femsa)","d":"spinbyoxxo.com.mx","c":"Fintech / BNPL / Wallet","crm":"Sí","v":["Contentsquare","GA4","Microsoft Ads (UET)"],"src":["html"],"b":false,"rq":60,"gtm":""}],"vcat":{"Google Tag Manager":"Tag mgmt","Google Ads / gtag":"Paid media","GA4":"Analytics","DoubleClick Floodlight / DV360 / CM360":"Programmatic (Google)","Meta Pixel":"Paid media","TikTok Pixel":"Paid media","Pinterest Tag":"Paid media","Snap Pixel":"Paid media","LinkedIn Insight":"Paid media","X / Twitter Pixel":"Paid media","Microsoft Ads (UET)":"Paid media","Amazon Ads":"Paid media","Criteo":"Retargeting / CPA","RTB House":"Retargeting / CPA","Taboola":"Native","Outbrain":"Native","Teads":"Video/Native","Seedtag":"Contextual","Adform":"Programmatic","Xandr / AppNexus":"Programmatic","The Trade Desk":"Programmatic","Google Dynamic Remarketing":"Retargeting / CPA","Ogury":"Programmatic","Quantcast":"Data / DMP","Smarterclick":"Retargeting / CPA","Acuity Ads / illumin":"Programmatic","AppNexus (Xandr legacy)":"Programmatic","MediaMath":"Programmatic","Yahoo DSP":"Programmatic","Retargetly":"Data / DMP","Lotame":"Data / DMP","LiveRamp":"Identity","ID5":"Identity","Oracle BlueKai":"Data / DMP","Adobe Audience Manager":"Data / DMP","AppsFlyer":"MMP / App","Adjust":"MMP / App","Branch":"MMP / App","Kochava":"MMP / App","Singular":"MMP / App","Awin":"Afiliados","Impact":"Afiliados","CJ Affiliate":"Afiliados","Rakuten Advertising":"Afiliados","Admitad":"Afiliados","Soicos":"Afiliados","Partnerize":"Afiliados","Adobe Analytics":"Analytics","Tealium":"Tag mgmt","Segment":"CDP","Hotjar":"UX","Microsoft Clarity":"UX","Contentsquare":"UX","FullStory":"UX","Dynamic Yield":"Personalización","Insider":"Martech / CRM","Emarsys (SAP)":"Martech / CRM","Salesforce Marketing Cloud":"Martech / CRM","Braze":"Martech / CRM","CleverTap":"Martech / CRM","MoEngage":"Martech / CRM","Klaviyo":"Martech / CRM","HubSpot":"Martech / CRM","Connectif":"Martech / CRM","Bloomreach":"Martech / CRM","Retail Rocket":"Personalización","Algolia":"Search","Bazaarvoice":"Reviews","Yotpo":"Reviews","Zendesk":"Chat","Intercom":"Chat","Shopify":"Plataforma","VTEX":"Plataforma","Salesforce Commerce Cloud":"Plataforma","Adobe Commerce (Magento)":"Plataforma","SAP Commerce":"Plataforma","Akamai":"Infra","Cloudflare":"Infra"}};

const VCAT = RAW.vcat;
const SITES = RAW.sites;

const GROUPS = {
  "Paid media": ["Meta Pixel","Google Ads / gtag","TikTok Pixel","Pinterest Tag","Snap Pixel","LinkedIn Insight","X / Twitter Pixel","Microsoft Ads (UET)","Amazon Ads","DoubleClick Floodlight / DV360 / CM360"],
  "Retargeting / CPA": ["RTB House","Criteo","Smarterclick","Google Dynamic Remarketing"],
  "Native": ["Taboola","Outbrain"],
  "Programmatic": ["Xandr / AppNexus","AppNexus (Xandr legacy)","The Trade Desk","Adform","MediaMath","Ogury","Acuity Ads / illumin","Yahoo DSP","Teads","Seedtag"],
  "Afiliados": ["Awin","Impact","CJ Affiliate","Rakuten Advertising","Admitad","Soicos","Partnerize"],
  "MMP / App": ["AppsFlyer","Adjust","Branch","Kochava","Singular"],
  "Data / Identity": ["Retargetly","Lotame","LiveRamp","ID5","Oracle BlueKai","Adobe Audience Manager","Quantcast"],
  "Martech / CRM": ["Salesforce Marketing Cloud","Braze","CleverTap","MoEngage","Klaviyo","Emarsys (SAP)","Insider","Bloomreach","Connectif","HubSpot","Dynamic Yield","Retail Rocket"],
  "Analytics / Tag": ["Google Tag Manager","GA4","Adobe Analytics","Tealium","Segment"],
  "UX": ["Hotjar","Microsoft Clarity","Contentsquare","FullStory"],
  "Plataforma": ["VTEX","Salesforce Commerce Cloud","Shopify","Adobe Commerce (Magento)","SAP Commerce","Algolia","Bazaarvoice","Yotpo","Zendesk","Intercom"],
};
const GORDER = Object.keys(GROUPS);
const GCOLOR = {
  "Paid media":"#2F6BFF","Retargeting / CPA":"#FF4D6D","Native":"#FFB020","Programmatic":"#8B5CF6",
  "Afiliados":"#00D68F","MMP / App":"#00C2FF","Data / Identity":"#F97316","Martech / CRM":"#A3E635",
  "Analytics / Tag":"#94A3B8","UX":"#64748B","Plataforma":"#475569"
};
const groupOf = (v) => GORDER.find(g => GROUPS[g].includes(v)) || "Plataforma";

const AFF = GROUPS["Afiliados"], MMP = GROUPS["MMP / App"], RTG = ["RTB House","Criteo","Smarterclick"];

function score(s) {
  if (s.b) return null;
  let n = 0;
  if (s.v.some(v => MMP.includes(v))) n += 3;
  if (s.v.some(v => AFF.includes(v))) n += 3;
  if (s.v.some(v => RTG.includes(v))) n += 2;
  if (s.v.includes("Google Dynamic Remarketing")) n += 1;
  if (s.v.some(v => GROUPS["Native"].includes(v))) n += 1;
  if (s.v.some(v => GROUPS["Programmatic"].includes(v))) n += 1;
  if (s.v.filter(v => GROUPS["Paid media"].includes(v)).length >= 3) n += 1;
  return n;
}
const SCORED = SITES.map(s => ({ ...s, sc: score(s), g: s.v.reduce((a,v)=>{const k=groupOf(v);(a[k]=a[k]||[]).push(v);return a;},{}) }));
const CATS = [...new Set(SITES.map(s => s.c))].sort();
const READ = SCORED.filter(s => !s.b);

const BENCH = {
  "Marketplace":["$29.99","$7.50","0.50–2.00"],"Departamental":["$29.99","$7.50","0.50–2.00"],
  "Autoservicio / Grocery":["$29.99","$7.50","0.50–2.00"],"Delivery / QSR":["—","—","0.50–2.00"],
  "Farmacia":["$29.99","$7.50","0.50–2.00"],"Beauty":["$29.99","$7.50","0.50–2.00"],
  "Moda / Calzado":["$29.99","$7.50","0.50–2.00"],"Deportes":["$29.99","$7.50","0.50–2.00"],
  "Electrónica / Tech":["$51.86","$12.97","0.50–2.00"],"Hogar / Oficina / Variedad":["$29.99","$7.50","0.50–2.00"],
  "Travel / Movilidad":["—","—","0.50–2.00"],"Entretenimiento / Ticketing":["—","—","0.50–2.00"],
  "Auto":["—","—","n/a"],"Nicho (mascotas, libros, juguetes, óptica, regalos)":["$30.69","$7.67","0.50–2.00"],
  "Fintech / BNPL / Wallet":["—","—","2.50–6.00"],"Telco":["—","—","0.50–2.00"],
};

const S = {
  bg:"#08090C", panel:"#101218", line:"#1E2230", line2:"#2A3040",
  txt:"#E8EAF0", dim:"#7C8398", blue:"#2F6BFF", warn:"#FFB020", crm:"#00D68F"
};

function Tag({ children, color, solid }) {
  return <span style={{display:"inline-block",padding:"2px 7px",borderRadius:3,fontSize:10,letterSpacing:".04em",
    fontFamily:"ui-monospace,monospace",whiteSpace:"nowrap",
    background: solid ? color : color+"1F", color: solid ? "#08090C" : color,
    border:`1px solid ${color}${solid?"":"44"}`, fontWeight:600}}>{children}</span>;
}

function Bar({ v, max, color }) {
  return <div style={{height:6,background:S.line,borderRadius:2,overflow:"hidden",minWidth:40}}>
    <div style={{height:"100%",width:`${max?(v/max)*100:0}%`,background:color,borderRadius:2}}/>
  </div>;
}


/* ---------------- VISTA 1 · ANUNCIANTE × MARTECH ---------------- */
function Matrix({ q, cat, crmOnly }) {
  const [hov, setHov] = useState(null);
  const [group, setGroup] = useState("Todo");
  const vendors = useMemo(() => {
    const used = new Set(SITES.flatMap(s => s.v));
    return GORDER.filter(g => group === "Todo" || g === group)
      .flatMap(g => GROUPS[g].filter(v => used.has(v)).map(v => ({ v, g })));
  }, [group]);
  const rows = useMemo(() => SCORED.filter(s =>
    (!q || s.n.toLowerCase().includes(q) || s.d.includes(q)) &&
    (cat === "Todas" || s.c === cat) && (!crmOnly || s.crm === "Sí")
  ).sort((a,b) => (b.sc ?? -1) - (a.sc ?? -1)), [q, cat, crmOnly]);

  return <div>
    <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
      {["Todo",...GORDER].map(g =>
        <button key={g} onClick={()=>setGroup(g)} style={{
          padding:"4px 9px",fontSize:10.5,borderRadius:3,cursor:"pointer",fontFamily:"ui-monospace,monospace",
          letterSpacing:".03em",border:`1px solid ${group===g?(GCOLOR[g]||S.blue):S.line2}`,
          background: group===g ? (GCOLOR[g]||S.blue)+"22" : "transparent",
          color: group===g ? (GCOLOR[g]||S.blue) : S.dim}}>{g}</button>)}
    </div>
    <div style={{overflow:"auto",maxHeight:"64vh",border:`1px solid ${S.line}`,borderRadius:6}}>
      <table style={{borderCollapse:"separate",borderSpacing:0,fontSize:11}}>
        <thead><tr>
          <th style={{position:"sticky",left:0,top:0,zIndex:3,background:S.panel,textAlign:"left",padding:"8px 10px",
            borderBottom:`1px solid ${S.line2}`,borderRight:`1px solid ${S.line2}`,minWidth:190,color:S.dim,
            fontWeight:600,fontSize:10,letterSpacing:".08em"}}>ANUNCIANTE</th>
          {vendors.map(({v,g},i) =>
            <th key={v} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              style={{position:"sticky",top:0,zIndex:2,background:hov===i?GCOLOR[g]+"22":S.panel,height:150,width:22,
                borderBottom:`1px solid ${S.line2}`,padding:0,verticalAlign:"bottom"}}>
              <div style={{writingMode:"vertical-rl",transform:"rotate(180deg)",padding:"6px 3px",fontSize:9.5,
                color:hov===i?GCOLOR[g]:S.dim,whiteSpace:"nowrap",fontFamily:"ui-monospace,monospace",fontWeight:500}}>{v}</div>
            </th>)}
        </tr></thead>
        <tbody>{rows.map((s,ri) => <tr key={s.n}>
          <td style={{position:"sticky",left:0,zIndex:1,background:ri%2?S.bg:S.panel,padding:"5px 10px",
            borderRight:`1px solid ${S.line2}`,borderBottom:`1px solid ${S.line}`,whiteSpace:"nowrap"}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              {s.crm==="Sí" && <span style={{width:3,height:14,background:S.crm,borderRadius:2}}/>}
              <span style={{color:s.b?S.dim:S.txt,fontWeight:500}}>{s.n}</span>
              {s.b ? <Tag color={S.warn}>bloqueado</Tag>
                   : <span style={{fontFamily:"ui-monospace,monospace",fontSize:10,color:s.sc>=6?S.crm:S.dim}}>{s.sc}</span>}
            </div>
          </td>
          {vendors.map(({v,g},i) => {
            const on = s.v.includes(v);
            return <td key={v} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              title={on?`${s.n} · ${v}`:""}
              style={{background:on?GCOLOR[g]:(hov===i?GCOLOR[g]+"14":(ri%2?S.bg:S.panel)),
                borderBottom:`1px solid ${S.line}`,width:22,height:22,padding:0}}/>;
          })}
        </tr>)}</tbody>
      </table>
    </div>
    <p style={{fontSize:10.5,color:S.dim,marginTop:8,fontFamily:"ui-monospace,monospace"}}>
      {rows.length} anunciantes · {vendors.length} vendors · barra verde = en CRM LSIX · número = score de fit CPA (0–12)
    </p>
  </div>;
}


/* ---------------- VISTA 2 · FICHA POR ANUNCIANTE ---------------- */
function Fichas({ q, cat, crmOnly }) {
  const rows = SCORED.filter(s =>
    (!q || s.n.toLowerCase().includes(q) || s.d.includes(q)) &&
    (cat === "Todas" || s.c === cat) && (!crmOnly || s.crm === "Sí")
  ).sort((a,b) => (b.sc ?? -1) - (a.sc ?? -1));
  return <div style={{display:"grid",gap:10,gridTemplateColumns:"repeat(auto-fill,minmax(330px,1fr))"}}>
    {rows.map(s => <div key={s.n} style={{border:`1px solid ${s.crm==="Sí"?S.crm+"55":S.line}`,borderRadius:6,
      background:S.panel,padding:"12px 14px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",gap:8}}>
        <div>
          <div style={{fontWeight:600,fontSize:13.5,color:S.txt}}>{s.n}</div>
          <div style={{fontSize:10.5,color:S.dim,fontFamily:"ui-monospace,monospace"}}>{s.d}</div>
        </div>
        <div style={{textAlign:"right"}}>
          {s.b ? <Tag color={S.warn}>sin lectura</Tag>
            : <><div style={{fontSize:22,fontWeight:700,lineHeight:1,color:s.sc>=6?S.crm:s.sc>=3?S.blue:S.dim,
                fontFamily:"ui-monospace,monospace"}}>{s.sc}</div>
              <div style={{fontSize:9,color:S.dim,letterSpacing:".06em"}}>FIT CPA</div></>}
        </div>
      </div>
      <div style={{display:"flex",gap:5,flexWrap:"wrap",margin:"9px 0"}}>
        <Tag color={S.dim}>{s.c}</Tag>
        {s.crm==="Sí" && <Tag color={S.crm} solid>CRM</Tag>}
        {s.src.map(x => <Tag key={x} color={S.line2==="x"?S.dim:"#64748B"}>{x}</Tag>)}
      </div>
      {s.b ? <div style={{fontSize:11,color:S.warn}}>Bloqueó el scan · pendiente Ghostery en Chrome</div>
        : <div style={{display:"grid",gap:5}}>
          {GORDER.filter(g => s.g[g]).map(g => <div key={g} style={{display:"flex",gap:8,alignItems:"baseline"}}>
            <span style={{fontSize:9.5,color:GCOLOR[g],minWidth:104,fontFamily:"ui-monospace,monospace",
              letterSpacing:".03em",flexShrink:0}}>{g}</span>
            <span style={{fontSize:11,color:S.txt,lineHeight:1.5}}>{s.g[g].join(" · ")}</span>
          </div>)}
        </div>}
    </div>)}
  </div>;
}

/* ---------------- VISTA 3 · POR VENDOR ---------------- */
function Vendors({ crmOnly }) {
  const [sel, setSel] = useState("RTB House");
  const base = crmOnly ? SCORED.filter(s => s.crm === "Sí") : SCORED;
  const counts = useMemo(() => {
    const m = {};
    base.forEach(s => s.v.forEach(v => m[v] = (m[v]||0)+1));
    return m;
  }, [crmOnly]);
  const max = Math.max(...Object.values(counts), 1);
  const users = base.filter(s => s.v.includes(sel));
  return <div style={{display:"grid",gridTemplateColumns:"minmax(280px,1.1fr) 1fr",gap:16}}>
    <div style={{maxHeight:"66vh",overflow:"auto",paddingRight:6}}>
      {GORDER.map(g => {
        const list = GROUPS[g].filter(v => counts[v]).sort((a,b)=>counts[b]-counts[a]);
        if (!list.length) return null;
        return <div key={g} style={{marginBottom:14}}>
          <div style={{fontSize:9.5,letterSpacing:".1em",color:GCOLOR[g],marginBottom:6,
            fontFamily:"ui-monospace,monospace",fontWeight:600}}>{g.toUpperCase()}</div>
          {list.map(v => <div key={v} onClick={()=>setSel(v)} style={{display:"grid",
            gridTemplateColumns:"1fr 46px 26px",gap:8,alignItems:"center",padding:"4px 6px",cursor:"pointer",
            borderRadius:3,background:sel===v?GCOLOR[g]+"20":"transparent"}}>
            <span style={{fontSize:11.5,color:sel===v?S.txt:S.dim}}>{v}</span>
            <Bar v={counts[v]} max={max} color={GCOLOR[g]}/>
            <span style={{fontSize:11,textAlign:"right",fontFamily:"ui-monospace,monospace",
              color:sel===v?GCOLOR[g]:S.dim}}>{counts[v]}</span>
          </div>)}
        </div>;
      })}
    </div>
    <div style={{border:`1px solid ${S.line}`,borderRadius:6,background:S.panel,padding:16,alignSelf:"start"}}>
      <div style={{fontSize:9.5,letterSpacing:".1em",color:GCOLOR[groupOf(sel)],fontFamily:"ui-monospace,monospace"}}>
        {groupOf(sel).toUpperCase()}</div>
      <div style={{fontSize:20,fontWeight:700,margin:"2px 0 3px"}}>{sel}</div>
      <div style={{fontSize:11.5,color:S.dim,marginBottom:12}}>
        {users.length} de {base.length} sitios{crmOnly?" del CRM":""}</div>
      <div style={{display:"grid",gap:4,maxHeight:"48vh",overflow:"auto"}}>
        {users.map(s => <div key={s.n} style={{display:"flex",justifyContent:"space-between",gap:8,
          padding:"5px 8px",borderRadius:3,background:S.bg,alignItems:"center"}}>
          <span style={{fontSize:11.5}}>{s.crm==="Sí" && <span style={{color:S.crm,marginRight:5}}>●</span>}{s.n}</span>
          <span style={{fontSize:10,color:S.dim,fontFamily:"ui-monospace,monospace"}}>{s.c}</span>
        </div>)}
        {!users.length && <div style={{fontSize:11.5,color:S.dim}}>Ningún sitio con lectura lo carga en home.</div>}
      </div>
    </div>
  </div>;
}


/* ---------------- VISTA 4 · MMP & APP READINESS ---------------- */
function MMPView({ crmOnly }) {
  const base = (crmOnly ? SCORED.filter(s=>s.crm==="Sí") : SCORED).filter(s => !s.b);
  const withMMP = base.filter(s => s.v.some(v => MMP.includes(v)));
  const withAff = base.filter(s => s.v.some(v => AFF.includes(v)));
  const byMMP = MMP.map(m => ({ m, list: base.filter(s => s.v.includes(m)) })).filter(x => x.list.length);
  const noMMP = base.filter(s => !s.v.some(v => MMP.includes(v)) && s.v.some(v => RTG.includes(v) || AFF.includes(v)));
  const K = ({n,l,c}) => <div style={{border:`1px solid ${S.line}`,borderRadius:6,padding:"12px 14px",background:S.panel}}>
    <div style={{fontSize:26,fontWeight:700,color:c,fontFamily:"ui-monospace,monospace",lineHeight:1}}>{n}</div>
    <div style={{fontSize:10.5,color:S.dim,marginTop:4,lineHeight:1.4}}>{l}</div></div>;
  return <div style={{display:"grid",gap:16}}>
    <div style={{display:"grid",gap:10,gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))"}}>
      <K n={withMMP.length} l="con MMP instalado — integración app-CPA en días" c={GCOLOR["MMP / App"]}/>
      <K n={withAff.length} l="con red de afiliados — ya pagan CPA hoy" c={GCOLOR["Afiliados"]}/>
      <K n={base.filter(s=>s.v.some(v=>RTG.includes(v))).length} l="con retargeting a resultado (RTB House / Criteo / Smarterclick)" c={GCOLOR["Retargeting / CPA"]}/>
      <K n={noMMP.length} l="compran a resultado pero sin MMP visible — el MMP es el gate" c={S.warn}/>
    </div>
    <div style={{display:"grid",gap:12,gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
      {byMMP.map(({m,list}) => <div key={m} style={{border:`1px solid ${S.line}`,borderRadius:6,background:S.panel,padding:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:9}}>
          <span style={{fontWeight:600,fontSize:13,color:GCOLOR["MMP / App"]}}>{m}</span>
          <span style={{fontFamily:"ui-monospace,monospace",fontSize:11,color:S.dim}}>{list.length}</span>
        </div>
        {list.map(s => <div key={s.n} style={{fontSize:11.5,padding:"3px 0",borderBottom:`1px solid ${S.line}`}}>
          {s.crm==="Sí" && <span style={{color:S.crm,marginRight:5}}>●</span>}{s.n}
          <span style={{color:S.dim,marginLeft:6,fontSize:10}}>{s.c}</span></div>)}
      </div>)}
    </div>
    <div style={{border:`1px solid ${S.warn}44`,borderRadius:6,background:S.warn+"0D",padding:14}}>
      <div style={{fontWeight:600,fontSize:12.5,color:S.warn,marginBottom:4}}>Compran a resultado en web pero sin MMP visible</div>
      <div style={{fontSize:11,color:S.dim,marginBottom:9}}>
        El pitch aquí es en dos tiempos: primero venta web a CPA, y el MMP como paso 2 para abrir el canal app.</div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
        {noMMP.map(s => <Tag key={s.n} color={s.crm==="Sí"?S.crm:"#94A3B8"}>{s.n}</Tag>)}
      </div>
    </div>
  </div>;
}

/* ---------------- VISTA 5 · CATEGORÍAS + BENCHMARK CPA ---------------- */
function Cats({ crmOnly }) {
  const base = crmOnly ? SCORED.filter(s=>s.crm==="Sí") : SCORED;
  const rows = CATS.map(c => {
    const all = base.filter(s => s.c === c), r = all.filter(s => !s.b);
    const pct = (fn) => r.length ? r.filter(fn).length / r.length : 0;
    return { c, n: all.length, r: r.length,
      rtg: pct(s => s.v.some(v => RTG.includes(v))), aff: pct(s => s.v.some(v => AFF.includes(v))),
      mmp: pct(s => s.v.some(v => MMP.includes(v))), nat: pct(s => s.v.some(v => GROUPS["Native"].includes(v))),
      dyn: pct(s => s.v.includes("Google Dynamic Remarketing")),
      avg: r.length ? r.reduce((a,s)=>a+s.sc,0)/r.length : 0, b: BENCH[c] || ["—","—","—"] };
  }).filter(x => x.n).sort((a,b) => b.avg - a.avg);
  const Cell = ({ v, color }) => <td style={{textAlign:"center",padding:"7px 4px",borderBottom:`1px solid ${S.line}`,
    background: v ? color + Math.round(v*200+30).toString(16).padStart(2,"0") : "transparent",
    fontFamily:"ui-monospace,monospace",fontSize:11,color: v > .5 ? "#08090C" : S.txt, fontWeight: v>.5?600:400}}>
    {v ? Math.round(v*100)+"%" : "·"}</td>;
  const TH = ({children,w}) => <th style={{padding:"8px 6px",fontSize:9.5,letterSpacing:".07em",color:S.dim,
    textAlign:"center",borderBottom:`1px solid ${S.line2}`,fontWeight:600,width:w}}>{children}</th>;
  return <div>
    <div style={{overflow:"auto",border:`1px solid ${S.line}`,borderRadius:6}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:11.5}}>
        <thead style={{background:S.panel}}><tr>
          <th style={{textAlign:"left",padding:"8px 12px",fontSize:9.5,letterSpacing:".07em",color:S.dim,
            borderBottom:`1px solid ${S.line2}`}}>CATEGORÍA</th>
          <TH w={52}>SITIOS</TH><TH w={52}>LEÍDOS</TH><TH w={56}>FIT ⌀</TH>
          <TH w={58}>RETARG.</TH><TH w={58}>DYN.REM</TH><TH w={58}>AFILIAD.</TH><TH w={52}>NATIVE</TH><TH w={52}>MMP</TH>
          <TH w={78}>CPA META MX*</TH><TH w={72}>CPI APP</TH>
        </tr></thead>
        <tbody>{rows.map(r => <tr key={r.c}>
          <td style={{padding:"7px 12px",borderBottom:`1px solid ${S.line}`,fontWeight:500}}>{r.c}</td>
          <td style={{textAlign:"center",borderBottom:`1px solid ${S.line}`,fontFamily:"ui-monospace,monospace",color:S.dim}}>{r.n}</td>
          <td style={{textAlign:"center",borderBottom:`1px solid ${S.line}`,fontFamily:"ui-monospace,monospace",color:S.dim}}>{r.r}</td>
          <td style={{textAlign:"center",borderBottom:`1px solid ${S.line}`,fontFamily:"ui-monospace,monospace",
            color:r.avg>=5?S.crm:S.txt,fontWeight:600}}>{r.avg.toFixed(1)}</td>
          <Cell v={r.rtg} color={GCOLOR["Retargeting / CPA"]}/><Cell v={r.dyn} color={GCOLOR["Retargeting / CPA"]}/>
          <Cell v={r.aff} color={GCOLOR["Afiliados"]}/><Cell v={r.nat} color={GCOLOR["Native"]}/>
          <Cell v={r.mmp} color={GCOLOR["MMP / App"]}/>
          <td style={{textAlign:"center",borderBottom:`1px solid ${S.line}`,fontFamily:"ui-monospace,monospace",
            fontSize:11,color:r.b[1]==="—"?S.dim:S.txt}}>{r.b[1]}</td>
          <td style={{textAlign:"center",borderBottom:`1px solid ${S.line}`,fontFamily:"ui-monospace,monospace",
            fontSize:11,color:S.dim}}>{r.b[2]}</td>
        </tr>)}</tbody>
      </table>
    </div>
    <div style={{fontSize:10.5,color:S.dim,marginTop:10,lineHeight:1.6,maxWidth:900}}>
      * CPA Meta MX estimado = mediana Meta US 2026 por industria (Ryze / Triple Whale) × factor CPM MX/US 0.245
      (CPM MX $3.92 vs US $16, Fuelads Q2 2026). Es techo de conversación, no precio. CPI app en USD, rango LatAm
      (Business of Apps 2025). Categorías en "—" no tienen benchmark público confiable. El CPA real sale de la sesión
      de unit economics — regla del playbook: sin unit economics no hay número.
    </div>
  </div>;
}


/* ---------------- SHELL ---------------- */
const TABS = [
  ["matriz","Matriz","Anunciante × martech, celda por celda"],
  ["fichas","Fichas","Stack completo de cada anunciante"],
  ["vendor","Vendors","Quién tiene instalado cada pixel"],
  ["mmp","MMP & App","Atribución lista para el modelo app-CPA"],
  ["cats","Categorías","Penetración y benchmark de CPA"],
];

export default function App() {
  const [tab, setTab] = useState("matriz");
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const [crmOnly, setCrmOnly] = useState(false);
  const ql = q.trim().toLowerCase();
  const nBlocked = SITES.filter(s => s.b).length;

  return <div style={{background:S.bg,color:S.txt,minHeight:"100vh",padding:"20px 22px 40px",
    fontFamily:"'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
    <style>{`
      *{box-sizing:border-box} button{font-family:inherit}
      ::-webkit-scrollbar{width:9px;height:9px}
      ::-webkit-scrollbar-track{background:${S.bg}}
      ::-webkit-scrollbar-thumb{background:${S.line2};border-radius:5px}
      input:focus,button:focus-visible{outline:2px solid ${S.blue};outline-offset:1px}
      @media (prefers-reduced-motion:no-preference){tbody tr{transition:background .08s}}
    `}</style>

    <header style={{borderBottom:`1px solid ${S.line2}`,paddingBottom:14,marginBottom:16}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:12}}>
        <div>
          <div style={{fontSize:9.5,letterSpacing:".18em",color:S.blue,fontFamily:"ui-monospace,monospace",
            fontWeight:600}}>LSIX  //  INTELIGENCIA DE STACK</div>
          <h1 style={{fontSize:26,fontWeight:700,margin:"5px 0 0",letterSpacing:"-.02em"}}>
            Quién ya compra a resultado en México</h1>
          <div style={{fontSize:11.5,color:S.dim,marginTop:4}}>
            100 eCommerce · {SITES.length - nBlocked} con lectura · {nBlocked} bloqueados · scan 21–24-ago-2026, home page
          </div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar anunciante o dominio"
            style={{background:S.panel,border:`1px solid ${S.line2}`,borderRadius:4,padding:"7px 10px",
              color:S.txt,fontSize:12,width:210}}/>
          <select value={cat} onChange={e=>setCat(e.target.value)}
            style={{background:S.panel,border:`1px solid ${S.line2}`,borderRadius:4,padding:"7px 8px",
              color:S.txt,fontSize:12,maxWidth:190}}>
            <option>Todas</option>{CATS.map(c => <option key={c}>{c}</option>)}
          </select>
          <button onClick={()=>setCrmOnly(!crmOnly)} style={{padding:"7px 11px",borderRadius:4,fontSize:11.5,
            cursor:"pointer",border:`1px solid ${crmOnly?S.crm:S.line2}`,
            background:crmOnly?S.crm+"22":"transparent",color:crmOnly?S.crm:S.dim,fontWeight:600}}>
            Solo CRM ({SITES.filter(s=>s.crm==="Sí").length})</button>
        </div>
      </div>
    </header>

    <nav style={{display:"flex",gap:2,marginBottom:16,borderBottom:`1px solid ${S.line}`,flexWrap:"wrap"}}>
      {TABS.map(([k,label,desc]) =>
        <button key={k} onClick={()=>setTab(k)} title={desc} style={{padding:"9px 14px",background:"none",
          border:"none",borderBottom:`2px solid ${tab===k?S.blue:"transparent"}`,cursor:"pointer",
          color:tab===k?S.txt:S.dim,fontSize:12.5,fontWeight:tab===k?600:400,marginBottom:-1}}>{label}</button>)}
    </nav>

    {tab==="matriz" && <Matrix q={ql} cat={cat} crmOnly={crmOnly}/>}
    {tab==="fichas" && <Fichas q={ql} cat={cat} crmOnly={crmOnly}/>}
    {tab==="vendor" && <Vendors crmOnly={crmOnly}/>}
    {tab==="mmp" && <MMPView crmOnly={crmOnly}/>}
    {tab==="cats" && <Cats crmOnly={crmOnly}/>}

    <footer style={{marginTop:26,paddingTop:12,borderTop:`1px solid ${S.line}`,fontSize:10.5,color:S.dim,
      lineHeight:1.6,maxWidth:1000}}>
      Método: Chromium headless capturando requests de red de la home (equivalente a Ghostery) + HTML y contenedores GTM;
      Sephora cargado manualmente desde Ghostery. Solo home page — los pixeles que disparan en producto, carrito o
      thank-you page no aparecen aquí. Score de fit CPA (0–12): MMP +3, afiliados +3, retargeting a resultado +2,
      dynamic remarketing +1, native +1, DSP +1, ≥3 pixeles de paid media +1. Ningún dato de LSIX ni CPA de anunciante
      inventado: los benchmarks son de terceros y están fechados en la pestaña Categorías.
    </footer>
  </div>;
}
