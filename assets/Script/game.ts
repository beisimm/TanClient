const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    uidShow: cc.Label = null

    @property(cc.Label)
    ridShow: cc.Label = null

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.uidShow.string = '用户: ' + uid
        this.ridShow.string = '房间: ' + rid

    }


    start() {

    }

    // update (dt) {}
}
