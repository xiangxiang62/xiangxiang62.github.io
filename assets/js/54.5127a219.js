(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{479:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),t("p",[s._v("前面我们介绍了 String、List、Set 这 3 个基本数据类型，今天是第 4 个："),t("code",[s._v("Hash")]),s._v("（哈希）。")]),s._v(" "),t("p",[s._v("Hash 类型，也叫散列，其 Value 是一个无序字典，类似于 Java 中的 HashMap 结构。")]),s._v(" "),t("p",[s._v("在 Redis 中，Hash 是一种用于存储和操作键值对的数据结构。它类似于字典或关联数组，其中每个键都与一个值相关联。Redis 中的 Hash 由一个字符串类型的字段（field）和相应的值（value）组成。")]),s._v(" "),t("p",[s._v("以下是一些关于 Redis 中 Hash 的特点和使用场景的介绍：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[t("code",[s._v("高效存储和访问")])]),s._v("： Redis 使用散列表（hash table）来实现 Hash 结构，使得对于大规模数据的存储和访问非常高效。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("结构化数据存储")])]),s._v("：Hash 可以用于存储结构化的数据，例如存储用户信息、商品信息等。每个字段都代表了特定的属性，而值则代表了对应属性的具体内容。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("字段唯一性")])]),s._v("：每个 Hash 中的字段都是唯一的，不会出现重复的字段。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("快速查询和更新")])]),s._v("：通过指定字段名，可以快速查询和更新对应的值，而无需遍历整个 Hash。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("支持批量操作")])]),s._v("：可以同时设置或获取多个字段的值，提供了方便的批量处理能力。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("适用于计数和计时器")])]),s._v("：Hash 可以用于计数和计时器的存储和操作，例如统计用户的点赞数、评论数，记录任务的完成时间等。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("缓存对象存储")])]),s._v("：Hash 可以用于缓存对象的存储，将对象的属性存储为 Hash 的字段，提供快速的访问和更新能力。")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("表示关系型数据")])]),s._v("：Hash 可以用于表示关系型数据，例如存储用户之间的好友关系、文章之间的关联关系等。")])])]),s._v(" "),t("h2",{attrs:{id:"数据类型-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型-hash"}},[s._v("#")]),s._v(" 数据类型 Hash")]),s._v(" "),t("h1",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("hset（添加hash）、hget（查询）、hgetall（查询所有）、hdel（删除hash中指定的值）、hlen（获取hash的长度）、hexists（判断key是否存在）：")])])]),s._v(" "),t("div",{staticClass:"language-r extra-class"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hset myhash name dingdada age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加hash，可多个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hget myhash name  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取hash中key是name的值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dingdada"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hget myhash age  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取hash中key是age的值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"23"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hgetall myhash  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取hash中所有的值，包含key")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dingdada"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"23"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hset myhash del test  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hgetall myhash\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dingdada"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"23"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"del"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hdel myhash del age  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除指定hash中的key（可多个），key删除后对应的value也会被删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hgetall myhash\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dingdada"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hlen myhash  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取指定hash的长度，相当于length、size")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" HEXISTS myhash name  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断key是否存在于指定的hash，存在返回1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" HEXISTS myhash age  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断key是否存在于指定的hash，不存在返回0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("h1",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("hkeys（获取所有key）、hvals（获取所有value）、hincrby（给值加增量）、hsetnx（存在不添加）:")])])]),s._v(" "),t("div",{staticClass:"language-r extra-class"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hset myhash age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" high "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("173")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hgetall myhash\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dingdada"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"23"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"high"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"173"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hkeys myhash  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取指定hash中的所有key")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"high"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hvals myhash   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取指定hash中的所有value")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dingdada"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"23"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"173"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hincrby myhash age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#让hash中age的value指定+2(自增)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hincrby myhash age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#让hash中age的value指定-1(自减)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hsetnx myhash nokey novalue  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加不存在就新增返回新增成功的数量（只能单个增加哦）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hsetnx myhash name miaotiao  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加存在则失败返回0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hgetall myhash\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dingdada"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"24"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"high"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"173"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nokey"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"novalue"')]),s._v("\n")])])]),t("h1",{attrs:{id:"-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[s._v("#")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("HMSET 和 HMGET")])])]),s._v(" "),t("div",{staticClass:"language-r extra-class"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" HMSET heima"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" name HanMeiMei\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" HMSET heima"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" name LiLei age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" sex man\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" HMGET heima"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" name age sex\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LiLei"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"man"')]),s._v("\n")])])]),t("h3",{attrs:{id:"hash-类型的常见命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash-类型的常见命令"}},[s._v("#")]),s._v(" Hash 类型的常见命令:")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[t("code",[s._v("HSET key field value")])]),s._v("：添加或者修改 hash 类型 key 的 field 的值;")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("HGET key field")])]),s._v("：获取一个 hash 类型 key 的 field 的值;")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("HMSET")])]),s._v("：批量添加多个 hash 类型 key 的 field 的值;")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("HMGET")])]),s._v("：批量获取多个 hash 类型 key 的 field 的值;")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("HGETALL")])]),s._v("：获取一个 hash 类型的 key 中的所有的 field 和 value;")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("HKEYS")])]),s._v("：获取一个 hash 类型的 key 中的所有的 field;")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("HINCRBY")])]),s._v(":让一个 hash 类型 key 的字段值自增并指定步长;")])]),s._v(" "),t("li",[t("p",[t("strong",[t("code",[s._v("HSETNX")])]),s._v("：添加一个 hash 类型的 key 的 field 值，前提是这个 field 不存在，否则不执行。")])])]),s._v(" "),t("p",[t("strong",[s._v("总结：")])]),s._v(" "),t("blockquote",[t("p",[s._v("Redis 中的 Hash 提供了一种高效的键值对存储和操作方式，适用于结构化数据的存储、快速查询和更新以及计数等场景。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);