<template>
  <div>
    <ul>
      <li v-for="baiViet in baiViets" :key="baiViet.id">
        <h1>{{ baiViet.noiDung }}</h1>
        <img :src="baiViet.linkAnh" alt="" />
        <h2>Người tạo là :{{ baiViet.nguoiTao }}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "BaiViet",
  data: () => {
    return {
      baiViets: [
        {
          id: 1,
          linkAnh:
            "https://znewsphoto.zadn.vn/w660/Uploaded/mdf_Vsxrlu/2018_09_02/40508787_705759273105776_3830190876101967872_n.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 2,
          linkAnh:
            "https://i.pinimg.com/280x280_RS/82/50/d0/8250d04e9d24487b578f7a6f50402807.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 3,
          linkAnh:
            "https://ttol.vietnamnetjsc.vn//2018/03/07/21/04/nu-sinh-17-tuoi-duoc-khen-dep-thuan-khiet-nhu-thien-su_11.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 4,
          linkAnh:
            "https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 5,
          linkAnh:
            "https://i.pinimg.com/736x/29/ab/5a/29ab5acafc429ac807f72aece29a5695.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
      ],
    };
  },
};
</script>
<style></style>
