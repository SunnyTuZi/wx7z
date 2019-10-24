/**
 * Create by Zwl on 2019/10/17
 * @Description:
 */

'use strict';

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('autoprefixer')({
                        overrideBrowserslist: ['> 0.15% in CN']
                    }),// 自动添加css前缀
                    require('postcss-pxtorem')({
                        rootValue : 37.5, // 换算的基数
                        propList  : ['*'],
                    }),
                ]
            }
        }
    },
    devServer: {
        overlay:{
            warning:false,
            errors:false
        },
        proxy: {
            '/api': {
                target: 'http://www.wx7z.com/api/getPostData',
                changeOrigin: true,
                ws: true
            }
        }
    }
}
