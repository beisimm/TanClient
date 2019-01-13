const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    uidShow: cc.Label = null

    @property(cc.Label)
    ridShow: cc.Label = null

    @property(cc.Label)
    OtherUserList: cc.Label = []


    onLeaveRoom() {
        sio.emit('leaveRoom')
    }

    seatUserShow(userList: Array) {
        if(userList.length==1){
            window.OtherUserList[0].string = ''
        }
        let otherUser = userList.filter(function (v) { //把非用户的其他用户取出来
            return v != window.uid
        });
        otherUser.map(function (v, i) {  // 把用户的ID渲染上去
            window.OtherUserList[i].string = v
        })
    }

    onLoad() {
        window.seatUserShow = this.seatUserShow
        window.OtherUserList = this.OtherUserList
        cc.log('window.getRoomInfo', window.getRoomInfo)
        if (window.getRoomInfo) {
            window.seatUserShow(window.getRoomInfo)
        }
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

        sio.on('sys', function (args) {
            console.log(args.msg)
            console.log('game.getRoomInfo', args.getRoomInfo)
            window.seatUserShow(args.getRoomInfo)

        })
    }


    start() {

    }

    // update (dt) {}
}
