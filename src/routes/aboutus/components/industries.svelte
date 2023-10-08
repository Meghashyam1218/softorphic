<script>
	let industries = {
		name: [
			'BFSI',
			'Oil and Gas',
			'Healthcare',
			'Logistics and Transportation ',
			'Manufacturing',
			'Professional services',
			'Retail',
			'Telecoms'
		],
		svg: [
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L12.3354 1.32918C12.1243 1.22361 11.8757 1.22361 11.6646 1.32918L12 2ZM2 10H1.25V10.75H2V10ZM22 10V10.75H22.75V10H22ZM22 7H22.75C22.75 6.71592 22.5895 6.45622 22.3354 6.32918L22 7ZM2 7L1.66459 6.32918C1.4105 6.45622 1.25 6.71592 1.25 7H2ZM22 9.25H2V10.75H22V9.25ZM2.33541 7.67082L12.3354 2.67082L11.6646 1.32918L1.66459 6.32918L2.33541 7.67082ZM11.6646 2.67082L21.6646 7.67082L22.3354 6.32918L12.3354 1.32918L11.6646 2.67082ZM2.75 10V7H1.25V10H2.75ZM21.25 7V10H22.75V7H21.25Z" fill="#141B34"/>
<path d="M11.9959 6.99988H12.0049" stroke="#141B34" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M4 10V18.5M8 10V18.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M16 9.99988V18.4999M20 9.99988V18.4999" stroke="#141B34" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M22 18.5H2V22H21.9997L22 18.5Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</svg>
`,
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 6V5.5C5 4.55719 5 4.08579 5.29289 3.79289C5.58579 3.5 6.05719 3.5 7 3.5C7.94281 3.5 8.41421 3.5 8.70711 3.79289C9 4.08579 9 4.55719 9 5.5V6" stroke="#141B34" stroke-width="1.5"/>
<path d="M15 5L18 5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16 2H14.6667C12.7932 2 12 2.93374 12 4.66667C12 5.53313 11.6034 6 10.6667 6H7C5.11438 6 4.17157 6 3.58579 6.58579C3 7.17157 3 8.11438 3 10V15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22H14C17.2998 22 18.9497 22 19.9749 20.9749C21 19.9497 21 18.2998 21 15V7C21 4.64298 21 3.46447 20.2678 2.73223C19.5355 2 18.357 2 16 2Z" stroke="#141B34" stroke-width="1.5"/>
<path d="M9 14.5873C9 13.1229 10.2638 11.6757 11.1509 10.8403C11.6326 10.3866 12.3674 10.3866 12.8491 10.8403C13.7362 11.6757 15 13.1229 15 14.5873C15 16.0231 13.864 17.5 12 17.5C10.136 17.5 9 16.0231 9 14.5873Z" stroke="#141B34" stroke-width="1.5"/>
</svg>
`,
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2V4M14 6V4M10 2V4M10 6V4M10 4H14" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 22H13.75C13.75 22.4142 14.0858 22.75 14.5 22.75V22ZM22 22.75C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25V22.75ZM2 21.25C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75V21.25ZM9.5 22V22.75C9.91421 22.75 10.25 22.4142 10.25 22H9.5ZM14.299 17.75L13.6495 18.125V18.125L14.299 17.75ZM13.75 17.201L14.125 16.5514V16.5514L13.75 17.201ZM9.70096 17.75L10.3505 18.125V18.125L9.70096 17.75ZM10.25 17.201L10.625 17.8505V17.8505L10.25 17.201ZM14.5 22.75H22V21.25H14.5V22.75ZM2 22.75H9.5V21.25H2V22.75ZM10.25 22V19.5H8.75V22H10.25ZM15.25 22V19.5H13.75V22H15.25ZM15.25 19.5C15.25 19.0465 15.2507 18.6562 15.2218 18.3374C15.192 18.0082 15.1259 17.6822 14.9486 17.375L13.6495 18.125C13.6731 18.1659 13.7075 18.2476 13.7279 18.4727C13.7493 18.7082 13.75 19.0189 13.75 19.5H15.25ZM12 17.75C12.4811 17.75 12.7918 17.7507 13.0273 17.7721C13.2524 17.7925 13.3341 17.8269 13.375 17.8505L14.125 16.5514C13.8178 16.3741 13.4918 16.308 13.1627 16.2782C12.8438 16.2493 12.4535 16.25 12 16.25V17.75ZM14.9486 17.375C14.7511 17.033 14.467 16.7489 14.125 16.5514L13.375 17.8505C13.489 17.9163 13.5837 18.011 13.6495 18.125L14.9486 17.375ZM10.25 19.5C10.25 19.0189 10.2507 18.7082 10.2721 18.4727C10.2925 18.2476 10.3269 18.1659 10.3505 18.125L9.05144 17.375C8.87407 17.6822 8.80802 18.0082 8.77818 18.3374C8.74928 18.6562 8.75 19.0465 8.75 19.5H10.25ZM12 16.25C11.5465 16.25 11.1562 16.2493 10.8373 16.2782C10.5082 16.308 10.1822 16.3741 9.875 16.5514L10.625 17.8505C10.6659 17.8269 10.7476 17.7925 10.9727 17.7721C11.2082 17.7507 11.5189 17.75 12 17.75V16.25ZM10.3505 18.125C10.4163 18.011 10.511 17.9163 10.625 17.8505L9.875 16.5514C9.53296 16.7489 9.24892 17.033 9.05144 17.375L10.3505 18.125Z" fill="#141B34"/>
<path d="M14 10H16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 14H16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 14H9" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 10H9" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`,
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17" cy="18" r="2" stroke="#141B34" stroke-width="1.5"/>
<circle cx="7" cy="18" r="2" stroke="#141B34" stroke-width="1.5"/>
<path d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8H8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11H6" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.05702 19.874L4.00488 4.70063C4.18289 3.31398 4.53457 3 5.95624 3C7.37791 3 7.72959 3.31398 7.90759 4.70063L10 21H3.05991C2.52521 21 2.25787 21 2.10693 20.8305C1.95599 20.6611 1.98967 20.3987 2.05702 19.874Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1537 21H21C21.4714 21 21.7071 21 21.8536 20.8536C22 20.7071 22 20.4714 22 20V7L17.6402 10.6332C16.9306 11.2245 16.5758 11.5201 16.2879 11.3853C16 11.2504 16 10.7886 16 9.86496V7L11.552 10.2349C11.0304 10.6143 10.7696 10.8039 10.4681 10.902C10.1666 11 9.84419 11 9.19926 11H9" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6H8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15L14 15" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 15H19" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12V21M17 12V21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 13.75C2.5 10.0966 2.5 8.26992 3.61299 7.13496C4.72599 6 6.51733 6 10.1 6H13.9C17.4827 6 19.274 6 20.387 7.13496C21.5 8.26992 21.5 10.0966 21.5 13.75C21.5 17.4034 21.5 19.2301 20.387 20.365C19.274 21.5 17.4827 21.5 13.9 21.5H10.1C6.51733 21.5 4.72599 21.5 3.61299 20.365C2.5 19.2301 2.5 17.4034 2.5 13.75Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16.5 6L16.4007 5.69094C15.9056 4.15089 15.6581 3.38087 15.0689 2.94043C14.4796 2.5 13.697 2.5 12.1316 2.5H11.8684C10.303 2.5 9.52036 2.5 8.93111 2.94043C8.34186 3.38087 8.09436 4.15089 7.59934 5.69094L7.5 6" stroke="#141B34" stroke-width="1.5"/>
</svg>
`,
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 6H22" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="6" cy="20" r="2" stroke="#141B34" stroke-width="1.5"/>
<circle cx="17" cy="20" r="2" stroke="#141B34" stroke-width="1.5"/>
<path d="M8 20L15 20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`,
			`<svg class="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10.0294C10.3726 8.65685 12.598 8.65685 13.9706 10.0294C15.3431 11.402 15.3431 13.6274 13.9706 15" stroke="#141B34" stroke-width="1.5"/>
<path d="M4.85289 19.1471C8.04869 22.3429 12.9127 22.8538 16.6418 20.6797C17.5285 20.1627 17.9719 19.9043 17.999 19.3782C18.0261 18.8522 17.5277 18.4882 16.531 17.7603C14.683 16.4107 12.8636 14.7603 11.0516 12.9484C9.23967 11.1364 7.58927 9.31705 6.23969 7.46904C5.51179 6.47231 5.14784 5.97395 4.62178 6.00105C4.09572 6.02815 3.83725 6.47149 3.32031 7.35818C1.14624 11.0873 1.6571 15.9513 4.85289 19.1471Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M15.5574 2C17.2371 2.17243 18.7811 2.83962 19.9693 4.02583C21.1611 5.21579 21.8299 6.76334 22 8.4465M18.5017 9C18.3026 8.14257 17.8914 7.36144 17.2598 6.73091C16.6314 6.10356 15.8537 5.69396 15 5.49405" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`
		]
	};
</script>

<scetion class="p-4 md:p-8 mx-auto flex flex-col gap-6 my-10 lg:max-w-[1600px]">
	<h1 class=" font-black text-2xl md:text-4xl text-gray-700">Industries Softorphic serves</h1>
	<div class="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 max-w-[1100px]">
		{#each industries.name as industry, i}
			<div data-aos="flip-right"
				class=" border-2 border-blue-100 hover:border-blue-300 gap-4 rounded-xl justify-center items-center p-4 flex flex-col lg:max-w-[]"
			>
				{@html industries.svg[i]}
				<h1 class="font-bold text-center text-gray-700">{industry}</h1>
			</div>
		{/each}
	</div>
</scetion>
