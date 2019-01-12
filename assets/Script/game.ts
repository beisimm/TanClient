
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   @property(cc.Label)
   uidShow: cc.Label = null

    @property(cc.Label)
    ridShow: cc.Label = null
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       this.uidShow.string = uid
       this.ridShow.string = rid

    }


    start () {

    }

    // update (dt) {}
}
