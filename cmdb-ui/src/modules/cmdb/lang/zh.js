const cmdb_zh = {
    relation: '关系',
    attribute: '属性',
    configTable: '配置表格',
    menu: {
        views: '视图',
        topologyView: '拓扑视图',
        resources: '资源',
        config: '配置',
        backend: '管理',
        ciTable: '资源数据',
        ciTree: '资源层级',
        ciSearch: '资源搜索',
        adCIs: '自动发现池',
        preference: '我的订阅',
        batchUpload: '批量导入',
        citypeManage: '模型配置',
        backendManage: '后台管理',
        customDashboard: '定制仪表盘',
        serviceTreeDefine: '服务树定义',
        citypeRelation: '模型关系',
        operationHistory: '操作审计',
        relationType: '关系类型',
        ad: '自动发现',
        cidetail: 'CI 详情'
    },
    ciType: {
        ciType: '模型',
        attributes: '模型属性',
        relation: '模型关联',
        trigger: '触发器',
        attributeAD: '属性自动发现',
        relationAD: '关系自动发现',
        grant: '权限配置',
        addGroup: '新增分组',
        editGroup: '修改分组',
        group: '分组',
        attributeLibray: '属性库',
        addCITypeInGroup: '在该组中新增CI模型',
        addCIType: '新增CI模型',
        editGroupName: '重命名分组',
        deleteGroup: '删除该组',
        CITypeName: '模型名(英文)',
        English: '英文',
        inputAttributeName: '请输入属性名',
        attributeNameTips: '不能以数字开头，可以是英文 数字以及下划线 (_)',
        editCIType: '编辑模型',
        defaultSort: '默认排序',
        selectDefaultOrderAttr: '选择默认排序属性',
        asec: '正序',
        desc: '倒序',
        uniqueKey: '唯一标识',
        uniqueKeySelect: '请选择唯一标识',
        uniqueKeyTips: 'json、密码、计算属性、预定义值属性不能作为唯一标识',
        notfound: '找不到想要的?',
        cannotDeleteGroupTips: '该分组下有数据, 不能删除!',
        confirmDeleteGroup: '确定要删除分组 【{groupName}】 吗？',
        confirmDeleteCIType: '确定要删除模型 【{typeName}】 吗？',
        uploading: '正在导入中',
        uploadFailed: '导入失败，请稍后重试',
        addPlugin: '新建plugin',
        deletePlugin: '删除plugin',
        confirmDeleteADT: '确认删除 【{pluginName}】',
        attributeMap: '字段映射',
        autoDiscovery: '自动发现',
        node: '节点',
        adExecConfig: '执行配置',
        adExecTarget: '执行机器',
        oneagentIdTips: '请输入以0x开头的16进制OneAgent ID',
        selectFromCMDBTips: '从CMDB中选择 ',
        adAutoInLib: '自动入库',
        adInterval: '采集频率',
        byInterval: '按间隔',
        allNodes: '所有实例',
        specifyNodes: '指定实例',
        specifyNodesTips: '请填写指定实例！',
        username: '用户名',
        password: '密码',
        link: '链接',
        list: '多值',
        listTips: '字段的值是1个或者多个，接口返回的值的类型是list',
        computeForAllCITips: '所有CI触发计算',
        confirmcomputeForAllCITips: '确认触发所有CI的计算？',
        isUnique: '是否唯一',
        unique: '唯一',
        isChoice: '是否选择',
        defaultShow: '默认显示',
        defaultShowTips: 'CI实例表格默认展示该字段',
        isSortable: '可排序',
        isIndex: '是否索引',
        index: '索引',
        indexTips: '字段可被用于检索，加速查询',
        confirmDelete: '确认删除【{name}】?',
        confirmDelete2: '确认删除?',
        computeSuccess: '触发成功！',
        basicConfig: '基础设置',
        AttributeName: '属性名(英文)',
        DataType: '数据类型',
        defaultValue: '默认值',
        autoIncID: '自增ID',
        customTime: '自定义时间',
        advancedSettings: '高级设置',
        font: '字体',
        color: '颜色',
        choiceValue: '预定义值',
        computedAttribute: '计算属性',
        computedAttributeTips: '该属性的值是通过模型的其它属性构建的表达式或者执行一段代码的方式计算而来，属性的引用方法为: {{ 属性名 }}',
        addAttribute: '新增属性',
        existedAttributes: '已有属性',
        editAttribute: '编辑属性',
        addAttributeTips1: '选中排序，则必须也要选中！',
        uniqueConstraint: '唯一校验',
        up: '上移',
        down: '下移',
        selectAttribute: '添加属性',
        groupExisted: '分组名称已存在',
        attributeSortedTips: '其他分组中的属性不能进行排序，如需排序请先拖至自定义的分组！',
        buildinAttribute: '内置字段',
        expr: '表达式',
        code: '代码',
        apply: '应用',
        continueAdd: '继续添加',
        filter: '过滤',
        choiceOther: '其他模型属性',
        choiceWebhookTips: '返回的结果按字段来过滤，层级嵌套用##分隔，比如k1##k2，web请求返回{k1: [{k2: 1}, {k2: 2}]}, 解析结果为[1, 2]',
        selectCIType: '请选择CMDB模型',
        selectCITypeAttributes: '请选择模型属性',
        selectAttributes: '请选择属性',
        choiceScriptDemo: 'class ChoiceValue(object):\n    @staticmethod\n    def values():\n        """\n        执行入口, 返回预定义值\n        :return: 返回一个列表, 值的类型同属性的类型\n        例如:\n        return ["在线", "下线"]\n        """\n        return []',
        valueExisted: '当前值已存在！',
        addRelation: '新增关系',
        sourceCIType: '源模型',
        sourceCITypeTips: '请选择源模型',
        dstCIType: '目标模型',
        dstCITypeTips: '请选择目标模型',
        relationType: '关联类型',
        relationTypeTips: '请选择关联类型',
        isParent: '被',
        relationConstraint: '关系约束',
        relationConstraintTips: '请选择关系约束',
        one2Many: '一对多',
        one2One: '一对一',
        many2Many: '多对多',
        basicInfo: '基本信息',
        nameInputTips: '请输入名称',
        triggerDataChange: '数据变更',
        triggerDate: '日期属性',
        triggerEnable: '开启',
        descInput: '请输入描述',
        triggerCondition: '触发条件',
        addInstance: '新增实例',
        deleteInstance: '删除实例',
        changeInstance: '实例变更',
        selectMutipleAttributes: '请选择属性（多选）',
        selectSingleAttribute: '请选择属性（单选）',
        beforeDays: '提前',
        days: '天',
        notifyAt: '发送时间',
        notify: '通知',
        triggerAction: '触发动作',
        receivers: '收件人',
        emailTips: '请输入邮箱，多个邮箱用;分隔',
        customEmail: '自定义收件人',
        notifySubject: '通知标题',
        notifySubjectTips: '请输入通知标题',
        notifyContent: '内容',
        notifyMethod: '通知方式',
        botSelect: '请选择机器人',
        refAttributeTips: '标题、内容可以引用该模型的属性值，引用方法为: {{ attr_name }}',
        webhookRefAttributeTips: '请求参数可以引用该模型的属性值，引用方法为: {{ attr_name }}',
        newTrigger: '新增触发器',
        editTriggerTitle: '编辑触发器 {name}',
        newTriggerTitle: '新增触发器 {name}',
        confirmDeleteTrigger: '确认删除该触发器吗?',
        int: '整数',
        float: '浮点数',
        text: '文本',
        datetime: '日期时间',
        date: '日期',
        time: '时间',
        json: 'JSON',
        event: '事件',
        reg: '正则校验',
        isInherit: '是否继承',
        inheritType: '继承模型',
        inheritTypePlaceholder: '请选择继承模型（多选）',
        inheritFrom: '属性继承自{name}',
        groupInheritFrom: '请至{name}进行修改',
        downloadType: '下载模型',
        deleteCIType: '删除模型',
        otherGroupTips: '其他分组属性不可排序',
        filterTips: '点击可仅查看{name}属性',
        attributeAssociation: '属性关联',
        attributeAssociationTip1: '通过2个模型的属性值(除密码、json、多值)来自动建立关系',
        attributeAssociationTip2: '双击可编辑',
        attributeAssociationTip3: '属性关联必须选择两个属性',
        attributeAssociationTip4: '请选择原模型属性',
        attributeAssociationTip5: '请选择目标模型属性',
        attributeAssociationTip6: '不可再删除',
        show: '展示属性',
        setAsShow: '设置为展示属性',
        cancelSetAsShow: '取消设置为展示属性',
        showTips: '服务树和拓扑视图里节点的名称'
    },
    components: {
        unselectAttributes: '未选属性',
        selectAttributes: '已选属性',
        downloadCI: '导出数据',
        filename: '文件名',
        filenameInputTips: '请输入文件名',
        saveType: '保存类型',
        saveTypeTips: '请选择保存类型',
        xlsx: 'Excel工作簿(*.xlsx)',
        csv: 'CSV(逗号分隔)(*.csv)',
        html: '网页(*.html)',
        xml: 'XML数据(*.xml)',
        txt: '文本文件(制表符分隔)(*.txt)',
        grantUser: '授权用户/部门',
        grantRole: '授权角色',
        confirmRevoke: '确认删除 【{name}】 的 【授权】 权限？',
        readAttribute: '查看字段',
        readCI: '查看实例',
        config: '配置',
        ciTypeGrant: '模型权限',
        ciGrant: '实例权限',
        attributeGrant: '字段权限',
        relationGrant: '关系权限',
        perm: '权限',
        all: '全部',
        customize: '自定义',
        none: '无',
        customizeFilterName: '请输入自定义筛选条件名',
        colorPickerError: '初始化颜色格式错误，使用#fff或rgb格式',
        example: '示例值',
        aliyun: '阿里云',
        tencentcloud: '腾讯云',
        huaweicloud: '华为云',
        beforeChange: '变更前',
        afterChange: '变更后',
        noticeContentTips: '请输入通知内容',
        saveQuery: '保存条件',
        pleaseSearch: '请查找',
        conditionFilter: '条件过滤',
        attributeDesc: '属性说明',
        ciSearchTips: '1. json、密码、链接属性不能搜索\n2. 搜索内容包括逗号, 则需转义\n3. 只搜索索引属性, 非索引属性使用条件过滤',
        ciSearchTips2: '例: q=hostname:*0.0.0.0*',
        subCIType: '订阅模型',
        already: '已',
        not: '未',
        sub: '订阅',
        selectBelow: '请在下方进行选择',
        subSuccess: '订阅成功',
        selectMethods: '请选择方式',
        noAuthRequest: '暂无请求认证',
        noParamRequest: '暂无参数认证',
        requestParam: '请求参数',
        param: '参数{param}',
        value: '值{value}',
        clear: '清空',
    },
    batch: {
        downloadFailed: '失败下载',
        unselectCIType: '尚未选择模板类型',
        pleaseUploadFile: '请上传文件',
        batchUploadCanceled: '批量上传已取消',
        selectCIType: '选择模型',
        selectCITypeTips: '请选择模型后下载模板',
        downloadTemplate: '下载模板',
        clickDownload: '点击下载',
        supportFileTypes: '支持文件类型：xls，xlsx',
        uploadResult: '上传结果',
        total: '共',
        successItems: '条，已成功',
        failedItems: '条，失败',
        items: '条',
        errorTips: '错误信息',
        requestFailedTips: '请求出现错误，请稍后再试',
        requestSuccessTips: '批量上传已完成',
        uploadFile: '文件上传',
        drawTips1: '请先<span class="cmdb-batch-upload-tips">选择模型</span>，<span class="cmdb-batch-upload-tips">下载模板</span>后',
        drawTips2: '<span class="cmdb-batch-upload-tips">点击或拖拽文件</span>至此上传',
        dataPreview: '数据预览并导入',
        tips1: '温馨提示：',
        tips2: '1. 点击下载模板，用户可以自定义模板文件的表头，包括模型属性、模型关联',
        // eslint-disable-next-line no-template-curly-in-string
        tips3: '2. 模板文件中红色为模型关系，如$产品.产品名(${模型名}.{属性名})这一列就可建立和产品之间的关系',
        tips4: '3. 下载模板excel文件中会将属性的预定义值置为下拉选项，请注意，受excel本身的限制，单个下拉框限制了最多255个字符，如果超过255个字符，我们不会设置该属性的下拉选项',
        tips5: '4. 在使用excel模板时，请确保单个文件不超过5000行',
    },
    preference: {
        mySub: '我的订阅',
        sub: '订阅',
        cancelSub: '取消订阅',
        editSub: '编辑订阅',
        peopleSub: '位同事已订阅',
        noSub: '暂无同事订阅',
        cancelSubSuccess: '取消订阅成功',
        confirmcancelSub: '确认取消订阅',
        confirmcancelSub2: '确认取消订阅 {name} 吗?',
        of: '的',
        hoursAgo: '小时前',
        daysAgo: '天前',
        monthsAgo: '月前',
        yearsAgo: '年前',
        just: '刚刚',
        searchPlaceholder: '请搜索模型',
    },
    custom_dashboard: {
        charts: '图表',
        newChart: '新增图表',
        editChart: '编辑图表',
        title: '标题',
        titleTips: '请输入图表标题',
        calcIndicators: '计算指标',
        dimensions: '维度',
        selectDimensions: '请选择维度',
        quantity: '数量',
        childCIType: '关系模型',
        level: '层级',
        levelTips: '请输入关系层级',
        preview: '预览',
        showIcon: '是否显示icon',
        chartType: '图表类型',
        dataFilter: '数据筛选',
        format: '格式',
        fontColor: '字体颜色',
        backgroundColor: '背景颜色',
        chartColor: '图表颜色',
        chartLength: '图表长度',
        barType: '柱状图类型',
        stackedBar: '堆积柱状图',
        multipleSeriesBar: '多系列柱状图',
        axis: '轴',
        direction: '方向',
        lowerShadow: '下方阴影',
        count: '指标',
        bar: '柱状图',
        line: '折线图',
        pie: '饼状图',
        table: '表格',
        default: '默认',
        relation: '关系',
        noCustomDashboard: '管理员暂未定制仪表盘',
    },
    preference_relation: {
        newServiceTree: '新增服务树',
        editServiceTree: '编辑服务树',
        serviceTreeName: '服务树名',
        serviceTreeNamePlaceholder: '请输入服务树名',
        public: '公开',
        saveLayout: '保存布局',
        childNodesNotFound: '不存在子节点，不能形成业务关系，请重新选择！',
        tips1: '不能与当前选中节点形成视图，请重新选择！',
        tips2: '请输入新增服务树名！',
        tips3: '请选择至少两个节点！',
        tips4: '树子节点为必选',
        tips5: '选中树目录节点，服务树子节点展示成Table',
        showLeafNode: '树的子节点展示成Table',
        showTreeNode: '展示树节点信息',
        sort: '顺序',
        sort1: '树子节点信息在前',
        sort2: '树节点信息在前'

    },
    history: {
        ciChange: 'CI变更',
        relationChange: '关系变更',
        ciTypeChange: '模型变更',
        triggerHistory: '触发历史',
        opreateTime: '操作时间',
        user: '用户',
        userTips: '输入筛选用户名',
        filter: '筛选',
        filterOperate: '筛选操作',
        attribute: '属性',
        old: '旧',
        new: '新',
        noUpdate: '没有修改',
        itemsPerPage: '/页',
        triggerName: '触发器名称',
        event: '事件',
        action: '动作',
        status: '状态',
        done: '已完成',
        undone: '未完成',
        triggerTime: '触发时间',
        totalItems: '共 {total} 条记录',
        pleaseSelect: '请选择',
        startTime: '开始时间',
        endTime: '结束时间',
        deleteCIType: '删除模型',
        addCIType: '新增模型',
        updateCIType: '修改模型',
        addAttribute: '新增属性',
        updateAttribute: '修改属性',
        deleteAttribute: '删除属性',
        addTrigger: '新增触发器',
        updateTrigger: '修改触发器',
        deleteTrigger: '删除触发器',
        addUniqueConstraint: '新增联合唯一',
        updateUniqueConstraint: '修改联合唯一',
        deleteUniqueConstraint: '删除联合唯一',
        addRelation: '新增关系',
        deleteRelation: '删除关系',
        noModifications: '没有修改',
        attr: '属性名',
        attrId: '属性ID',
        changeDescription: '属性ID：{attr_id}，提前：{before_days}天，主题：{subject}\n内容：{body}\n通知时间：{notify_at}',
        ticketStartTime: '工单发起时间',
        ticketCreator: '发起人',
        ticketTitle: '工单名称',
        ticketFinishTime: '节点完成时间',
        ticketNodeName: '节点名称',
        itsmUninstalled: '请结合维易ITSM使用',
        applyItsm: '免费申请',
        ticketId: '工单ID',
    },
    relation_type: {
        addRelationType: '新增关系类型',
        nameTips: '请输入类型名',
    },
    ad: {
        upload: '规则导入',
        download: '规则导出',
        accept: '入库',
        acceptBy: '入库人',
        acceptTime: '入库时间',
        confirmAccept: '确认入库？',
        acceptSuccess: '入库成功',
        isAccept: '是否入库',
        deleteADC: '确认删除该条数据？',
        batchDelete: '确认删除这些数据？',
        agent: '内置 & 插件',
        snmp: '网络设备',
        http: '公有云资源',
        rule: '自动发现规则',
        timeout: '超时错误',
        mode: '模式',
        collectSettings: '采集设置',
        updateFields: '更新字段',
        pluginScript: `# -*- coding:utf-8 -*-

import json
        
        
class AutoDiscovery(object):
        
    @property
    def unique_key(self):
        """
        
        :return: Returns the name of a unique attribute
        """
        return
        
    @staticmethod
    def attributes():
        """
        Define attribute fields
        :return: Returns a list of attribute fields. The list items are (name, type, description). The name must be in English.
        type: String Integer Float Date DateTime Time JSON
        For example:
        return [
            ("ci_type", "String", "CIType name"),
            ("private_ip", "String", "Internal IP, multiple values separated by commas")
        ]
        """
        return []
        
    @staticmethod
    def run():
        """
        Execution entry, returns collected attribute values
        :return: 
        Returns a list, the list item is a dictionary, the dictionary key is the attribute name, and the value is the attribute value
        For example:
        return [dict(ci_type="server", private_ip="192.168.1.1")]
        """
        return []
        
        
if __name__ == "__main__":
    result = AutoDiscovery().run()
    if isinstance(result, list):
        print("AutoDiscovery::Result::{}".format(json.dumps(result)))
    else:
        print("ERROR: The collection return must be a list")
        `,
        server: '物理机',
        vserver: '虚拟机',
        nic: '网卡',
        disk: '硬盘',
    },
    ci: {
        attributeDesc: '查看属性配置',
        selectRows: '选取：{rows} 项',
        addRelation: '添加关系',
        all: '全部',
        batchUpdate: '批量修改',
        batchUpdateConfirm: '确认要批量修改吗？',
        batchUpdateInProgress: '正在批量修改',
        batchUpdateInProgress2: '正在批量修改，共{total}个，成功{successNum}个，失败{errorNum}个',
        batchDeleting: '正在删除...',
        batchDeleting2: '正在删除，共{total}个，成功{successNum}个，失败{errorNum}个',
        copyFailed: '复制失败！',
        noLevel: '无层级关系！',
        batchAddRelation: '批量添加关系',
        history: '变更记录',
        relITSM: '关联工单',
        topo: '拓扑',
        table: '表格',
        m2mTips: '当前模型关系为多对多，请前往关系视图进行增删操作',
        confirmDeleteRelation: '确认删除关系？',
        tips1: '多个值使用,分割',
        tips2: '可根据需要修改字段，当值为 空 时，则该字段 置空',
        tips3: '请选择需要修改的字段',
        tips4: '必须至少选择一个字段',
        tips5: '搜索 名称 | 别名',
        tips6: '加快检索, 可以全文搜索, 无需使用条件过滤\n\n json、链接、密码目前不支持建索引 \n\n文本字符长度超过190不能建索引',
        tips7: '表现形式是下拉框, 值必须在预定义值里',
        tips8: '多值, 比如内网IP',
        tips9: '仅针对前端',
        tips10: '模型的其他属性通过表达式的方式计算出来\n\n一个代码片段计算返回的值',
        newUpdateField: '新增修改字段',
        attributeSettings: '字段设置',
        share: '分享',
        noPermission: '暂无权限',
        rollback: '回滚',
        rollbackHeader: '实例回滚',
        rollbackTo: '回滚至: ',
        rollbackToTips: '请选择回滚时间点',
        baselineDiff: '基线对比结果',
        instance: '实例',
        rollbackBefore: '当前值',
        rollbackAfter: '回滚后',
        noDiff: '在【{baseline}】后数据没有发生变化',
        rollbackConfirm: '确认要回滚吗 ？',
        rollbackSuccess: '回滚成功',
        rollbackingTips: '正在批量回滚中',
        batchRollbacking: '正在回滚，共{total}个，成功{successNum}个，失败{errorNum}个',
        baselineTips: '该时间点的变更也会被回滚, 唯一标识、密码属性不支持回滚',
    },
    serviceTree: {
        remove: '移除',
        deleteNode: '移除 {name}',
        tips1: '例：q=os_version:centos&sort=os_version',
        tips2: '表达式搜索',
        alert1: '管理员 还未配置业务关系, 或者你无权限访问!',
        copyFailed: '复制失败',
        deleteRelationConfirm: '确认将选中的 {name} 从当前关系中删除？',
        batch: '批量操作',
        editNode: '编辑节点',
        editNodeName: '修改节点名',
        grantTitle: '授权（查看权限）',
        userPlaceholder: '请选择用户',
        rolePlaceholder: '请选择角色',
        grantedByServiceTree: '服务树授权：',
        grantedByServiceTreeTips: '请先在服务树里删掉节点授权',
        peopleHasRead: '当前有查看权限的人员：',
        authorizationPolicy: '实例授权策略：',
        idAuthorizationPolicy: '按节点授权的：',
        view: '查看权限',
        searchTips: '在服务树中筛选'
    },
    tree: {
        tips1: '请先到 我的订阅 页面完成订阅!',
        subSettings: '订阅设置',
    },
    topo: {
        addTopoView: '新增拓扑视图',
        editTopoView: '编辑拓扑视图',
        addTopoViewInGroup: '在分组下定义拓扑视图',
        groupRequired: '请先选择分组或者创建分组',
        viewName: '标题',
        viewNamePlaceholder: '请输入拓扑视图的标题',
        inputNameTips: '必须输入标题',
        centralNodeType: '中心节点模型',
        filterInstances: '中心节点实例',
        typeRequired: '必须要选择中心节点模型',
        instancesRequired: '实例必须要选择',
        path: '路径选择',
        aggregationCount: '聚合数',
        aggreationCountTip: '当子节点数 > 聚合数 则进行分页展示',
        preview: '预览',
        noData: '没有数据',
        edit: '编辑',
        delete: '删除',
        searchPlaceholder: '搜索拓扑视图',
        confirmDeleteView: '您确定要删除该视图吗?',
        noInstancePerm: '您没有该实例的查看权限',
        noPreferenceAttributes: '该实例没有订阅属性或者没有默认展示的属性',
    },
}
export default cmdb_zh
