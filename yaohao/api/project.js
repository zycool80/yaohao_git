var _require = require("./../utils/utilsKit/index.js"), wxRequest = _require.wxRequest,
    qcloudRequest = wxRequest.qcloudRequest, qcloudPostRequest = wxRequest.qcloudPostRequest,
    simpleQcloudRequest = wxRequest.simpleQcloudRequest, getLottery = function (t) {
        return qcloudRequest("/lottery/" + t);
    }, getLotteryDetail = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return qcloudRequest("/lottery/projectLottery", {
            project_id: t,
            lottery_id: e
        });
    }, getLotteryResults = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return qcloudRequest("/lottery/" + t + "/results", {
            page: r,
            keyword: e,
            type: o
        });
    }, getLotteryArticles = function (t) {
        return qcloudRequest("/lottery/" + t + "/articles", {});
    }, getLotteries = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments[1],
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        return qcloudRequest("/api/bos/house/housePage", {
            keyword: t,
            type: e,
            page: o,
            area_id: r,
            is_quality: i
        });
    }, getLotteryCodeDetail = function (t, e) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return qcloudRequest("/buildings/codeDetail", {
            lottery_id: t,
            code: e,
            type: o
        });
    }, getProjects = function (t) {
        return qcloudRequest("/project2", t);
    }, getProjectDetail = function (t) {
        return qcloudRequest("/project2/" + t + "/detail2");
    }, getProjectDetailInfo = function (t) {
        return qcloudRequest("/project2/" + t + "/detailInfo");
    }, getProjectPhotos = function (t) {
        return qcloudRequest("/project2/" + t + "/photos2");
    }, getProjectLotteries = function (t) {
        return qcloudRequest("/project/" + t + "/lotteries");
    }, getProjectArticles = function (t) {
        return qcloudRequest("/project/" + t + "/articles", {});
    }, projectDetail = function (t, e) {
        return qcloudRequest("/project2/projectDetail", {
            project_id: t,
            lottery_id: e
        });
    }, historyLottery = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return qcloudRequest("/lottery/historyLottery", {
            project_id: t,
            lottery_id: e
        });
    }, localSearch = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        return qcloudRequest("/project2/localSearch", {
            project_id: t,
            axis: e,
            right_top: o,
            left_bottom: r,
            type: i
        });
    }, lotteryPhotos = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return qcloudRequest("/subPackages/project/pages/photos", {
            project_id: t,
            type: e,
            page: o
        });
    }, dynamicRuleRead = function () {
        return qcloudRequest("/project2/dynamicRuleRead", {});
    }, notLotteryList = function (t, e, o, r) {
        return qcloudRequest("/lottery/notLotteryList", {
            page: t,
            price_type: e,
            area_id: o,
            keyword: r
        });
    }, houseAreaList = function (t, e) {
        return qcloudRequest("/secondary", {
            sort: t,
            city_id: e
        });
    }, findCommunity = function (t) {
        return qcloudRequest("/evaluate/community", {
            keyword: t
        });
    }, gettimedata = function (t) {
        return qcloudRequest("/evaluate/finishYear", {
            community_id: t
        });
    }, findValuation = function (t, e, o, r, i, u, n, s, c, l) {
        return qcloudPostRequest("/evaluate/forecast", {
            community_id: t,
            build_size: e,
            frame_bedroom_num: o,
            frame_hall_num: r,
            frame_bathroom_num: i,
            orientation: u,
            floor: n,
            total_floor: s,
            tags: c,
            channel_id: l
        });
    }, getContrastList = function (t, e) {
        return qcloudRequest("/user/pkProjects", {
            page: t,
            size: e
        });
    }, notLotteryAreaMaster = function () {
        return qcloudRequest("/secondary/area_master", {});
    }, getMiniProgramQrcode = function (t) {
        return qcloudRequest("/qrcode/getMiniProgramQrcode", {
            type: t
        });
    }, goodsBannerImg = function (t) {
        return qcloudRequest("/goods/getBanners", {
            goods_sku_id: t
        });
    }, drawSkuDetails = function (t) {
        return qcloudRequest("/goodsSku/" + t, {});
    }, getUserdzType = function (t) {
        return qcloudRequest("/goods/winAPrizeStatus", {
            sku_id: t
        });
    }, getUserDraw = function (t) {
        return qcloudRequest("/raffle/status", {
            sku_id: t
        });
    }, setTakePart = function (t) {
        return qcloudRequest("/raffle/takePart", {
            sku_id: t
        });
    }, setHellphim = function (t) {
        return qcloudPostRequest("/boosts/add", {
            sku_id: t
        });
    }, getHellpList = function (t, e, o) {
        return qcloudRequest("/boosts/helpers/" + t, {
            page: e,
            size: o
        });
    }, getParticipate = function (t, e, o) {
        return qcloudRequest("/raffle/draws", {
            sku_id: t,
            page: e,
            size: o
        });
    }, getSponsorsList = function (t) {
        return qcloudRequest("/goods/sponsors", {
            sku_id: t
        });
    }, getMyRannk = function (t) {
        return qcloudRequest("/goods/myRaking", {
            sku_id: t
        });
    }, getShareQrCode = function (t) {
        return qcloudRequest("/goods/shareQrCode", {
            sku_id: t
        });
    }, rankingsList = function (t) {
        return qcloudRequest("/boosts/rankings/" + t, {});
    }, getSkuImages = function (t) {
        return qcloudRequest("/goods/getSkuImages", {
            goods_sku_id: t
        });
    }, building = function (t, e) {
        return qcloudRequest("/lottery/building", {
            project_id: t,
            lottery_id: e
        });
    }, buildingUnit = function (t) {
        return qcloudRequest("/lottery/unit", {
            id: t
        });
    }, buildingFloor = function (t) {
        return qcloudRequest("/lottery/floor", {
            id: t
        });
    }, buildingRoomDetails = function (t) {
        return qcloudRequest("/lottery/roomDetails", {
            room_id: t
        });
    }, initHelp = function (t) {
        return qcloudRequest("/raffle/friends", {
            boost_id: t
        });
    }, getDrawMan = function (t) {
        return qcloudRequest("/user/awards/" + t);
    }, forecast = function (t, e) {
        return qcloudRequest("/forecasts/num", {
            project_id: t,
            pre_order_no: e
        });
    }, commonProblems = function (t) {
        return qcloudRequest("/lottery/problems", {
            lottery_id: t
        });
    }, getPopleNums = function (t, e) {
        return qcloudRequest("/forecasts/num", {
            project_id: t,
            pre_order_no: e
        });
    }, getGuidePic = function () {
        return qcloudRequest("/lottery/guidance", {});
    }, getProjectPrice = function (t, e) {
        return qcloudRequest("/lottery/prices", {
            project_id: t,
            lottery_id: e
        });
    }, getSwiperImage = function (t) {
        return qcloudRequest("/api/bos/house/detail", {
            project_id: t
        });
    }, getIcon = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return qcloudRequest("/buildings/links", {
            project_id: t,
            lottery_id: e
        });
    }, getDetails = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return qcloudRequest("/api/bos/house/detail", {
            type: 'last',
            id: t,
            project_id: t,
            lottery_id: e,
            is_not_lottery: o
        });
    }, getLotCategories = function (t) {
        return qcloudRequest("/buildings/categories", {
            lottery_id: t
        });
    }, getLotsalesMan = function (t) {
        return qcloudRequest("/api/app/user/getBindUser", {
            project_id: t
        });
    }, getLotLines = function (t) {
        return qcloudRequest("/buildings/timeLines", {
            lottery_id: t
        });
    }, getLotMaterial = function (t, e) {
        return qcloudRequest("/buildings/materials", {
            lottery_id: t,
            project_id: e
        });
    }, getBtnStatus = function (t, e) {
        return qcloudRequest("/buildings/bottom", {
            lottery_id: t,
            project_id: e
        });
    }, getlotActivity = function () {
        return qcloudRequest("/buildings/activity", {});
    }, getlotButtonList = function (t) {
        return qcloudRequest("/buildings/buttonList", {
            lottery_id: t
        });
    }, geiBuildingList = function (t) {
        return qcloudRequest("/api/bos/house/getHouseFJ", {
            id: t,
            lottery_id: t
        });
    }, decorationStyle = function (t) {
        return qcloudRequest("/api/bos/house/getHouseFJ", {
            id: t,
            lottery_id: t
        });
    }, getHousePrice = function (t) {
        return qcloudRequest("/api/bos/house/getHouseFJ", t);
    }, buildingHeader = function (t) {
        return qcloudRequest("/project/dynamics/headers/" + t, {});
    }, buildingDatas = function (t, e, o, r, i) {
        return qcloudRequest("/project/dynamics/pages/" + t, {
            type: e,
            page: o,
            size: r,
            dynamic_id: i
        });
    }, searchProject = function (t, e) {
        return qcloudRequest("/project2/searchProject", {
            keywords: t,
            page: e
        });
    }, getUnitBuiling = function (t, e) {
        return qcloudRequest("/price/rooms", {
            lottery_id: t,
            building: e
        });
    }, getHousingData = function (t) {
        return qcloudRequest("/lottery/" + t + "/purchaseMaterial", {});
    }, allProject = function () {
        return qcloudRequest("/banner/allProject", {});
    }, getNoLotterList = function (t) {
        return qcloudRequest("/lottery/notLotteryList2", t);
    }, getLotteryInfo = function (t) {
        return qcloudRequest("/project2/attribute", {
            project_id: t
        });
    }, getlotteryRemind = function (t) {
        return qcloudRequest("/project2/reminds", {
            project_id: t
        });
    }, getRemindStatus = function (t) {
        return qcloudRequest("/project2/statusRemind", {
            project_id: t
        });
    }, houseTypeDetail = function (t) {
        return qcloudRequest("/houseTypes/" + t, {
            id: t
        });
    }, featureGoodHouse = function () {
        return qcloudRequest("/project/featureGoodHouse", {});
    }, articleRecommend = function () {
        return qcloudRequest("/article/projectArticleRecommend", {});
    }, getProjectDetailsData = function (t, e) {
        return qcloudRequest("/project2/projectDetails", {
            project_id: t,
            lottery_id: e
        });
    }, getProjectCoupon = function (t) {
        return simpleQcloudRequest("/projects/coupons", {
            project_id: t
        });
    }, getFilterAreaList = function () {
        return qcloudRequest("/", {});
    }, featureKinds = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return qcloudRequest("/kinds", {
            onlyTitle: t,
            page: e,
            size: 15
        });
    }, featureRooms = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return qcloudRequest("/kinds/projects", {
            kind_id: t,
            page: e,
            size: 8
        });
    }, featureRoomsFilter = function (t) {
        return qcloudRequest("/kinds/projects", t);
    };

module.exports = {
    featureKinds: featureKinds,
    featureRooms: featureRooms,
    featureRoomsFilter: featureRoomsFilter,
    getFilterAreaList: getFilterAreaList,
    getProjectCoupon: getProjectCoupon,
    getRemindStatus: getRemindStatus,
    getlotteryRemind: getlotteryRemind,
    getLotteryInfo: getLotteryInfo,
    getProjectDetailsData: getProjectDetailsData,
    houseTypeDetail: houseTypeDetail,
    articleRecommend: articleRecommend,
    featureGoodHouse: featureGoodHouse,
    getNoLotterList: getNoLotterList,
    allProject: allProject,
    getUnitBuiling: getUnitBuiling,
    searchProject: searchProject,
    getHousingData: getHousingData,
    buildingDatas: buildingDatas,
    buildingHeader: buildingHeader,
    getHousePrice: getHousePrice,
    decorationStyle: decorationStyle,
    geiBuildingList: geiBuildingList,
    getlotButtonList: getlotButtonList,
    getlotActivity: getlotActivity,
    getBtnStatus: getBtnStatus,
    getLotLines: getLotLines,
    getLotMaterial: getLotMaterial,
    getLotsalesMan: getLotsalesMan,
    getLotCategories: getLotCategories,
    getDetails: getDetails,
    getIcon: getIcon,
    getSwiperImage: getSwiperImage,
    getProjectPrice: getProjectPrice,
    forecast: forecast,
    getGuidePic: getGuidePic,
    getPopleNums: getPopleNums,
    commonProblems: commonProblems,
    getDrawMan: getDrawMan,
    initHelp: initHelp,
    getSkuImages: getSkuImages,
    rankingsList: rankingsList,
    getShareQrCode: getShareQrCode,
    getMyRannk: getMyRannk,
    getSponsorsList: getSponsorsList,
    getParticipate: getParticipate,
    getHellpList: getHellpList,
    setHellphim: setHellphim,
    setTakePart: setTakePart,
    getUserDraw: getUserDraw,
    getUserdzType: getUserdzType,
    drawSkuDetails: drawSkuDetails,
    goodsBannerImg: goodsBannerImg,
    buildingRoomDetails: buildingRoomDetails,
    buildingFloor: buildingFloor,
    buildingUnit: buildingUnit,
    building: building,
    getMiniProgramQrcode: getMiniProgramQrcode,
    notLotteryAreaMaster: notLotteryAreaMaster,
    getContrastList: getContrastList,
    findValuation: findValuation,
    gettimedata: gettimedata,
    findCommunity: findCommunity,
    houseAreaList: houseAreaList,
    notLotteryList: notLotteryList,
    getLottery: getLottery,
    dynamicRuleRead: dynamicRuleRead,
    getLotteryDetail: getLotteryDetail,
    getLotteryResults: getLotteryResults,
    getLotteryArticles: getLotteryArticles,
    getLotteries: getLotteries,
    getLotteryCodeDetail: getLotteryCodeDetail,
    getProjects: getProjects,
    getProjectDetail: getProjectDetail,
    getProjectDetailInfo: getProjectDetailInfo,
    getProjectPhotos: getProjectPhotos,
    getProjectLotteries: getProjectLotteries,
    getProjectArticles: getProjectArticles,
    projectDetail: projectDetail,
    historyLottery: historyLottery,
    localSearch: localSearch,
    lotteryPhotos: lotteryPhotos
};