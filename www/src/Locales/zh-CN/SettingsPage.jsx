export default {
	'settings-header-text': '系统设置',
	'input-mode-label': '输入模式',
	'input-mode-extra-label': '切换触摸板和Share键',
	'input-mode-options': {
		xinput: 'XInput',
		'nintendo-switch': 'Nintendo Switch',
		ps3: 'PS3/DirectInput',
		keyboard: '键盘',
		ps4: 'PS4',
		xbone: 'Xbox One',
	},
	'ps4-mode-options': {
		controller: '游戏控制器',
		arcadestick: '街机摇杆',
	},
	'd-pad-mode-label': '方向模式',
	'd-pad-mode-options': {
		'd-pad': '十字键',
		'left-analog': '左摇杆',
		'right-analog': '右摇杆',
	},
	'socd-cleaning-mode-label': 'SOCD覆盖模式',
	'socd-cleaning-mode-note':
		'注意：PS4, PS3 and Nintendo Switch输入模式不支持设置SOCD覆盖模式为关闭，默认设置为回中模式。',
	'socd-cleaning-mode-options': {
		'up-priority': '上优先',
		neutral: '回中',
		'last-win': '后输入的优先',
		'first-win': '先输入的优先',
		off: '关闭',
	},
	'profile-number-label': '档案编号',
	'ps4-compatibility-label':
		'对于 <strong>兼容PS5</strong>, 请使用“街机摇杆”模式并启用PS直通验证附加功能<br/>对于 <strong>支持PS4</strong>, 如果你已经上传了必要文件，请使用“游戏控制器”模式并启用PS4模式附加功能。',
	'hotkey-settings-label': '快捷键设置',
	'hotkey-settings-sub-header':
		"<1>Fn</1> 组合映射在<4 exact='true' to='/pin-mapping'>引脚映射</4>页面提供了一个可映射的Function按键。 要选择 <1>Fn</1> 组合映射选项，请同时按住 Function 按键和其他快捷键。<5 />此外, 可从下拉列表中选择 <1>None</1> 以取消分配按钮",
	'hotkey-settings-warning': 'Function 按键未映射引脚时，Fn 组合映射将会被禁用',
	'hotkey-actions': {
		'no-action': '无',
		'dpad-digital': '十字键模式',
		'dpad-left-analog': '左摇杆模式',
		'dpad-right-analog': '右摇杆模式',
		'home-button': 'Home 键',
		'capture-button': 'Capture 键',
		'socd-up-priority': 'SOCD 上优先',
		'socd-neutral': 'SOCD 回中模式',
		'socd-last-win': 'SOCD 后输入的优先',
		'socd-first-win': 'SOCD 先输入的优先',
		'socd-off': 'SOCD 关闭',
		'invert-x': '反转 X 轴',
		'invert-y': '反转 Y 轴',
		'toggle-4way-joystick-mode': '切换4向摇杆模式',
		'toggle-ddi-4way-joystick-mode': '切换DDI-4向摇杆模式',
		'b1-button': 'B1 键',
		'b2-button': 'B2 键',
		'b3-button': 'B3 键',
		'b4-button': 'B4 键',
		'l1-button': 'L1 键',
		'r1-button': 'R1 键',
		'l2-button': 'L2 键',
		'r2-button': 'R2 键',
		'l3-button': 'L3 键',
		'r3-button': 'R3 键',
		's1-button': 'S1 键',
		's2-button': 'S2 键',
		'a1-button': 'A1 键',
		'a2-button': 'A2 键',
		'touchpad-button': '触摸板',
		'load-profile-1': '加载 档案 #1',
		'load-profile-2': '加载 档案 #2',
		'load-profile-3': '加载 档案 #3',
		'load-profile-4': '加载 档案 #4',
		'next-profile': '下一档案',
		'reboot-default': '重启 GP2040-CE',
	},
	'forced-setup-mode-label': '强制设置模式',
	'forced-setup-mode-options': {
		off: '关闭',
		'disable-input-mode': '禁用输入模式',
		'disable-web-config': '禁用网页配置',
		'disable-both': '全部禁用',
	},
	'forced-setup-mode-modal-title': '强制设置模式警告',
	'forced-setup-mode-modal-body':
		'如果保存后重新启动到控制器模式，您将无法再访问网页配置。 如果你完全理解并打算解锁保存按钮，请在下方键入 "<strong>{{warningCheckText}}</strong>" 。 单击取消将还原此设置并保存。',
	'4-way-joystick-mode-label': '4向摇杆模式',
	'lock-hotkeys-label': '锁定快捷键',
	'keyboard-mapping-header-text': '键盘映射',
	'keyboard-mapping-sub-header-text': '使用下方的表格重新配置按键映射',
};
