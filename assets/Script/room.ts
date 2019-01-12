const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.EditBox)
    inputRoomID: cc.EditBox = null

    @property(cc.Label)
    UIDShow: cc.Label = null


    onCreateRoon() {
        console.log('创建房间')
        sio.emit('room', {
            rqs: 'create',
        })
    }

    onJoinRoom() {
        if (this.inputRoomID.string != '') {
            console.log('加入房间', this.inputRoomID.string)

            sio.emit('room', {
                rqs: 'join',
                rid: this.inputRoomID.string
            })

        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this.UIDShow.string = `${uid}`
        sio.on('room', function (args) {
            window.rid = args.rid
            if (args.status == 'ok') {
                cc.director.loadScene("game")

            }else {
                console.log('房间不存在')
            }

        })
    }

    start() {

    }

    // update (dt) {}
}
