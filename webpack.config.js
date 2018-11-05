var webpack = require('webpack');
var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
//var ExtractTextPlugin = require('extract-text-webpack-plugin')


// const extractSass = new ExtractTextPlugin({
//   filename: "[name].css",
// });


module.exports = {
  entry: __dirname+'/scripts/app.js',
  //入口文件
  output: {
    filename: 'app.js',
    path:__dirname+'/dist',
    // publicPath:"./"
  },
  devServer: {
    contentBase: path.join(__dirname),
    inline:true, 
    hot:true ,
    // host: '192.168.0.104', //如果指定的host，这样同局域网的电脑或手机可以访问该网站,host的值在dos下使用ipconfig获取 
    port:8080,
    open:true,
    // compress:true, //压缩 

  },
  devtool: 'source-map',
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['env']
          }
        }
      },
      // {
      //   test: /\.scss$/,
      //   use: extractSass.extract({
      //       use: [{
      //           loader: "css-loader"
      //       }, {
      //           loader: "sass-loader"
      //       }],
      //       // 在开发环境使用 style-loader
      //       fallback: "style-loader"
      //   })
      // },
        // {
        //   test: /\.(png|svg|jpg|gif)$/,
        //   use: [
        //     'file-loader'
        //   ]
        // },
        // {
        //   test: /\.(html)$/,
        //   use: {
        //     loader: 'html-loader',
        //   }
        // },
       {
         test: /\.scss$/, 
         loader: "style-loader!css-loader!sass-loader" 
       },

      
    ]
  },
  //  plugins: [
  //   extractSass
  // ],
  plugins: [
    new HtmlwebpackPlugin({
        title: 'server dev index',
        template:"index.html" //指定模板
    })//在dist目录下自动生成index.html，指定其title
    ,
    new webpack.HotModuleReplacementPlugin()    //11.5JS报错原因 心态崩了

//     new ExtractTextPlugin({
//       filename : "dist/style.css"
//     })//提取出来的样式放在style.css文件中
  ],
}