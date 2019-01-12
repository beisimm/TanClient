// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
