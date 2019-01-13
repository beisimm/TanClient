

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.EditBox)
    loginEdibox: cc.EditBox = null

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        window.sio = io.connect('127.0.0.1:3000')
        sio.on('login', function (msg) {
            if (msg.status == 'ok') {
                window.uid = msg.uid
                console.log('登陆成功',msg.uid)
                cc.director.loadScene("room")
            }
        })
    }

    onLoginClick() {
        if (this.loginEdibox.string != '') {
            let UID = this.loginEdibox.string
            sio.emit('login', UID)
        }

    }

    start() {

    }

    // update (dt) {}
}
