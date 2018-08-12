/**
 * 路由配置
 * Created by julien.zhang on 2015/2/27.
 */

module.exports = {

    /**
     * filter定义中间件
     * @param before 可选 自定义全局前置过滤器
     * @param after  可选 自定义全局后置过滤器
     * @example
     *
     */
    filter: {
        before: ['cross-domain'],
        after:  ['action_map','dir', '404', '500']
    },

    /**
     * mapping定义路由
     * @param url     必须 定义路由url
     * @param method  可选 定义请求方法 get|post|put|delete，默认为all
     * @param action  必须 定义路由处理器,映射到action目录下的一个js文件
     * @param filter  可选 定义过滤器，值可以是一个对象或数组，数组的情况下，则表示前置过滤器
     * @example
     *  {
     *       url:'/test',
     *       action:'test.test',
     *       filter:{
     *           before:['authorization']
     *       }
     *  }
     *  访问/test, 先由filter目录下authorization模块处理请求，授权通过后，接着由action目录下的test模块的test方法相应请求
     */
    mapping: [
/*        {
            method: 'all',
            url: '/demo',
            action: 'demo',
            filter: {
                before: [],
                after: []
            }
        },*/
        {
            url: '/',
            method: 'get',
            action: 'index'
        },
        {
            url: '/stock/plan',
            method: 'get',
            action: 'stock/plan.get'
        },
        {
            url: '/stock/plan',
            method: 'post',
            action: 'stock/plan.post'
        },
        {
            url: '/stock/plan/:id',
            method: 'delete',
            action: 'stock/plan.del'
        },
        {
            url: '/stock/tags/:type?',
            method: 'get',
            action: 'stock/tags.get'
        },
        {
            url: '/stock/tags',
            method: 'post',
            action: 'stock/tags.post'
        },
        {
            url: '/stock/tags/:id',
            method: 'delete',
            action: 'stock/tags.del'
        },
        {
            url: '/stock/replay',
            method: 'get',
            action: 'stock/replay.get'
        },
        {
            url: '/stock/replay',
            method: 'post',
            action: 'stock/replay.post'
        },
        {
            url: '/stock/logic',
            method: 'get',
            action: '/stock/logic.get'
        },
        {
            url: '/stock/logic',
            method: 'post',
            action: 'stock/logic.post'
        },
        {
            url: '/stock/logic/:id',
            method: 'delete',
            action: 'stock/logic.del'
        }
    ]

};