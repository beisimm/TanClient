const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    uidShow: cc.Label = null

    @property(cc.Label)
    ridShow: cc.Label = null

    @property(cc.Node)
    UserList: cc.Node = []


    onLeaveRoom() {
        sio.emit('leaveRoom')
    }

    onLoad() {
        this.uidShow.string = uid
        this.ridShow.string = '房间: ' + rid
        sio.on('leaveRoom', function (args) {
            if (args.status == 'ok') {
                window.rid = null
                cc.director.loadScene("room")
            } else {
                console.log('房间离开失败')
            }
        })
        sio.on('sys',function (args) {
            console.log(args)
        })

    }


    start() {

    }

    // update (dt) {}
}
