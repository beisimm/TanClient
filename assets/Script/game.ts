const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    uidShow: cc.Label = null

    @property(cc.Label)
    ridShow: cc.Label = null


    onLeaveRoom() {
        sio.emit('leaveRoom')
    }

    onLoad() {
        this.uidShow.string = '用户: ' + uid
        this.ridShow.string = '房间: ' + rid
        sio.on('leaveRoom', function (args) {
            if (args.status == 'ok') {
                window.rid = null
                cc.director.loadScene("room")
            } else {
                console.log('房间离开失败')
            }

        })

    }


    start() {

    }

    // update (dt) {}
}
