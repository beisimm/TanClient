

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.EditBox)
    inputRoomID: cc.EditBox = null

    @property(cc.Label)
    UIDShow: cc.Label = null


    onCreateRoon(){
        console.log('创建房间')
        sio.emit('room',{
            rqs:'create',
            uid:uid,
        })
    }
    onJoinRoom(){
        console.log('加入房间')
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.UIDShow.string = `${uid}`
        sio.on('room',function (args) {
            window.rid = args.rid
            if (args.status == 'ok'){
                cc.director.loadScene("game")

            }
        })
    }

    start () {

    }

    // update (dt) {}
}
