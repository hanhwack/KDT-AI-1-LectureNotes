<template lang="">
    <div>
        <form @submit.prevent="onSubmit"> // submit이 동작되지 않기 위해 prevent를 사용한다
            <table>
                <tr>
                    <td>게시물 번호</td>
                    <td>
                        <input type="text" :value="board.boardId" disabled/> // value="board.boardId" -> 고유값 disabled: 막혀있다는 뜻
                    </td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>
                        <input type="text" v-model="title"/>      title = 양방향
                    </td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>
                        <input type="text" :value="board.writer" disabled/>
                    </td>
                </tr>
                <tr>
                    <td>등록일자</td>
                    <td>
                        <input type="text" :value="board.createDate" disabled/>
                    </td>
                </tr>
                <tr>
                    <td>본문</td>
                    <td>
                        <textarea cols="70" rows="25" v-model="content"/>
                    </td>
                </tr>
            </table>

            <div>
                <button type="submit">수정 완료</button> 
                <router-link :to="{ 
                    name: 'BoardReadPage', 
                    params: { boardId: board.boardId.toString() }
                }">수정 취소</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        board: {
            type: Object,
            required: true,
        }
    },
    data () {
        return {
            title: '',
            content: '',
            writer: '',
            createDate: '',
        }
    },
    created () {
        this.title = this.board.title   // props data 맵핑
        this.content = this.board.content
        this.writer = this.board.writer
        this.createDate = this.board.createDate
    },
    methods: {
        onSubmit () {
            const { title, content, writer } = this
            this.$emit('submit', { title, content, writer })  // $emit form 이랑 Page 연결
        }
    }
}
</script>

<style lang="">
    
</style>