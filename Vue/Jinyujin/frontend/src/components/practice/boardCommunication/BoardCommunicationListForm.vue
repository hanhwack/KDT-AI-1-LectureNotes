<template lang="">
    <div>
     <h3>게시물 목록</h3>
        <table style="margin: 10px;">
            <tr>
                <th align="center" width="6%">번호</th>
                <th align="center" width="70%">제목</th>
                <th align="center" width="70%">가격</th>
                <th align="center" width="10%">작성자</th>
                <th align="center" width="14%">등록일자</th>
            </tr>
            <tr v-if="!bboards || (Array.isArray(bboards) && bboards.length === 0)">
                <td colspan="4">
                    현재 등록된 게시물이 없습니다!
                </td>
            </tr>
            <tr v-else v-for="bboard in bboards" :key="bboard.boardId">
                <td align="center">
                    {{ bboard.boardId }}
                </td>
                <td align="center">
                    <router-link :to="{ 
                        name: 'BboardReadPage', 
                        params: { boardId: bboard.boardId.toString() }}">
                            {{ bboard.title }}
                    </router-link>
                </td>
                <td align="center">
                    {{ bboard.writer }}
                </td>
                <td align="center">
                    {{ bboard.createDate }}
                </td>
            </tr>
        </table>
        <div class = "md-layout-item md-size-30">
            <md-field>
                <label for="search">Search for</label>
                <md-input v-model="serach"/>
            </md-field>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        boards: {
            type: Array
        }
    }
}
</script>
<style lang="">
    
</style>