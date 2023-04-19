<template>
    <div id="login">
        <div id="form">
            <template v-if="state">
                <h2>用户登录</h2>
                <el-form ref="formRef" :model="userData" label-width="60px" class="demo-ruleForm">
                    <el-form-item label="账户：" prop="name">
                        <el-input v-model.number="userData.name" type="text" />
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input v-model.number="userData.password" type="password" show-password />
                    </el-form-item>
                    <el-form-item id="btn_list">
                        <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
                        <el-button @click="resetForm(formRef)">重置</el-button>
                    </el-form-item>
                </el-form>
                <div id="form_b">
                    <el-link type="primary" @click="goToRegister">没有账号？前往注册！</el-link>
                </div>
            </template>
            <template v-else>
                <h2>用户注册</h2>
                <el-form ref="formRef" :model="userRegistrationrData" label-width="60px" class="demo-ruleForm">
                    <el-form-item label="账户：" prop="name">
                        <el-input v-model.number="userRegistrationrData.name" type="text" />
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input v-model.number="userRegistrationrData.password" type="password" show-password />
                    </el-form-item>
                    <el-form-item label="电话：" prop="tel">
                        <el-input v-model.number="userRegistrationrData.tel" type="text" />
                    </el-form-item>
                    <el-form-item id="btn_list">
                        <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
                        <el-button @click="resetForm(formRef)">重置</el-button>
                    </el-form-item>
                </el-form>
                <div id="form_b">
                    <el-link type="primary" @click="goToRegister">已有账号，马上登录</el-link>
                </div>
            </template>
        </div>
    </div>
</template>
  
<script setup>
import { reactive, ref } from 'vue'

const formRef = ref()

const userData = reactive({
    name: 'admin',
    password: 123456,
})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!',formEl)
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}


// const formRef = ref()

const userRegistrationrData = reactive({
    name: null,
    password: null,
    tel: null,
})

// const submitForm = (formEl) => {
//     if (!formEl) return
//     formEl.validate((valid) => {
//         if (valid) {
//             console.log('submit!',formEl)
//         } else {
//             console.log('error submit!')
//             return false
//         }
//     })
// }

// const resetForm = (formEl) => {
//     if (!formEl) return
//     formEl.resetFields()
// }




const state = ref(true)

const goToRegister = () => {
    state.value = !state.value
}
</script>

<style lang="scss" scoped>
#login {
    width: 100%;
    height: 100vh;
    background-color: #409EFF;
    background: url('@/assets/image/background.jpg');
    /* 背景图垂直、水平均居中 */
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    position: relative;

    #form {
        position: absolute;
        top: 50%;
        left: 65%;
        transform: translateY(-50%);
        width: 300px;
        padding: 30px;
        border-radius: 10px;
        background-color: #ffffff77;
        backdrop-filter: blur(50px);

        .el-form {
            margin: 50px 0 20px 0;
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            // :deep(.el-form-item__label) {
            //     color: white;
            // }

            #btn_list {
                display: flex;
                justify-content: flex-end;

                :deep(.el-form-item__content) {
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }

        #form_b {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
}</style>