// JavaScript File
var comparr = [
	{
		id: "1",
		name: "Coach & Develop",
		rows: [
				{
				id: "1",
				name: "Communication",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Never provides direction, or fails to clearly communicate performance expectations",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Sometimes provides direction, or may fail to clearly communicate performance expectations",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Provides direction and clearly communicates performance expectations, checking back to ensure understanding",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Often defines and communicates roles and responsibilities in a way that connects behaviors and outcomes to capitalize on personal and team performance, checking back to ensure understanding",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Always defines and communicates roles and responsibilities in a way that connects behaviors and outcomes to capitalize on personal and team performance, checking back to ensure understanding",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Accountability",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "Does not follow-up on commitments made and does not hold team accountable for their actions in a timely manner.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Frequently does not hold individuals accountable for their actions; Sometimes does not provide feedback in a timely manner.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Holds individuals responsible for their actions in a manner that is timely, fair and objective; Measures performance against goals with consistent follow-up",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Holds individuals responsible for their actions in a manner that is timely, fair and objective; Measures performance and behaviors against goals with consistent follow-up",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: "Holds individuals responsible for their actions in a manner that is timely, fair and objective; Always measures performance and behaviors against goals with consistent follow-up Promotes individual and team accountability through consistent follow through with their employees.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Effective Coaching",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: 'Always uses the "tell" approach when coaching and does not incorporate effective questioning to lead the learner/agent to the correct behavior.',
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: 'Tends to "tell" their direct report what needs to be done instead of incorporating effective questioning to lead the learner/agent to the correct behavior.',
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Usually directs coaching session through collaboration and utilization of effective questioning for the learner to identify the correct action plan or performance gap",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Often directs coaching session through collaboration and utilization of effective questioning for the learner to identify the correct action plan and root cause of the behavioral or performance gap.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Always directs coaching session through collaboration and utilization of effective questioning for the learner to identify the correct action plan and root cause of the behavioral or performance gap. Effectively uses collaborative approach on all types of learners/agents.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Behavioral Feedback",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row4val1",
					desc: "Behavioral feedback is not provided, only numerical or targeted goals are discussed.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row4val2",
					desc: "Behavioral feedback is only sometimes provided, with primary focus being on numerical or performance goals.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row4val3",
					desc: "Utilizes SMART behavioral feedback with team members in order to accomplish a task or solve a problem. Links behaviors to performance goals.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row4val4",
					desc: "Collaboratively utilizes SMART behavioral feedback, engaging the employee in an effective manner of guided questioning and self-discovery while linking behaviors to performance goals.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row4val5",
					desc: "Always proactively adapts and utilizes SMART behavioral feedback, engaging the employee in an effective manner of guided questioning and self-discovery while linking behaviors to performance goals. Encourages team members to seek out new solutions, to consider alternatives to the norm, and to embrace the potential of change.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "5",
				name: "Development",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row5val1",
					desc: "Does not hold weekly development meetings with employees.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row5val2",
					desc: "Does not consistently hold weekly development meetings with employees which focus around performance and next steps. Inconsistently fosters a positive feedback environment by focusing more on negative feedback than building on strengths.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row5val3",
					desc: "Meets with employees weekly to review performance, discuss action plans and determine next steps to success. Fosters a positive feedback environment through reinforcement of strengths.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row5val4",
					desc: "Meets with employees weekly to review performance, discuss behaviors,  action plans and determine next steps to success, tailoring weekly goals as needed to adjust to behavior and performance goals. Fosters a positive feedback environment through reinforcement of strengths and inspires other to succeed.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row5val5",
					desc: "Always meets with employees weekly to review performance, discuss behaviors, action plans and determine next steps to success, tailoring weekly goals proactively adjusting action plans to meet the needs of the business. Is a role model in creating a positive feedback environment through reinforcement of strengths.  Inspires others to succeed and teaches other leaders to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "6",
				name: "Flexibility",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row6val1",
					desc: 'Consistently uses a "one size fits all" method to coaching and feedback',
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row6val2",
					desc: 'Tends not to recognize employees as individuals, using a "one size fits all" method to providing coaching and feedback.',
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row6val3",
					desc: "Consistently uses appropriate methods and a flexible interpersonal style to help their team develop their capabilities.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row6val4",
					desc: "Often uses appropriate methods and a flexible interpersonal style to help their team develop their capabilities while promoting personal accountability through self-inspection.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row6val5",
					desc: "Always uses appropriate methods and a flexible interpersonal style to help their team develop their capabilities while promoting personal accountability through self-inspection of themselves and their team.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
		}]
	},{
		id: "2",
		name: "Time Management",
		rows: [{
				id: "1",
				name: "Time Management",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Does not manage time effectively and rarely completes tasks on time. Is rarely on time for meetings.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Manages time ineffectively and is unable to consistently complete assigned tasks. Does not vary or adjust work planning in order to complete task efficiently.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Manages time effectively and consistently meets deadlines. Completes assigned tasks.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Consistently manages time effectively, meeting deadlines and completing assigned tasks in an efficient manner.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Always manages time effectively, meeting deadlines and completing assigned tasks in an efficient manner with high quality results.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Documentation",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "Never utilizes a systematic approach to ensure all tasks are completed and documented appropriately.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Seldom utilizes a systematic approach to ensure all tasks are completed and documented appropriately",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Plans and schedules tasks so that work is completed on time.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Tasks or projects are well-documented, completed on time and communicated accurately and effectively to stakeholders.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: "Tasks or projects are well-documented, completed on time and communicated accurately and effectively to stakeholders. When engaged in a project, proactively assists others to ensure project is documented and completed on time.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Resource Utilization",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Never considers the utilization of available resources needed to complete a task.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "Does not utilize or consider all available resources to complete a task in an efficient and effective manner.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Takes advantage of available resources (individuals, processes, departments, and tools) to complete work efficiently.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Effectively assesses own and others' workload and consistently delivers high quality results on time.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Proactively engages available resources, delivering high quality results on time through collaboration and partnerships, delegates tasks when appropriate. Shares best practices with others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Prioritization",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row4val1",
					desc: "Does not understand or perform tasks according to their importance or urgency. Is usually behind in answering email or responding to requests.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row4val2",
					desc: "Understands the importance of prioritizing tasks, however has challenges managing and completing tasks based on their order of importance and urgency. Tends to get behind in answering email or responding to requests.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row4val3",
					desc: "Performs tasks according to their urgency; adjusts priorities when appropriate. Typically answers email in appropriate time frame.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row4val4",
					desc: "Performs tasks quickly and efficiently according to their importance and urgency. Is able to adjust priorities based on business impact. Is able to delegate appropriate tasks. Responds to email in appropriate time frame.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row4val5",
					desc: "Performs tasks quickly and efficiently according to their importance and urgency, while identifying potential obstacles and strategies to overcome them. Is able to adjust priorities based on business impact. Is able to delegate appropriate tasks. Finds new ways of organizing work area or planning work to accomplish work more efficiently and shares best practices with others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "5",
				name: "Multi-tasking",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row5val1",
					desc: "Ineffective at multi-tasking and managing multiple projects, goals or individuals at once.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row5val2",
					desc: "Has challenges with multi-tasking or managing more than one goal or project at a time.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row5val3",
					desc: "Displays ability to multitask, managing multiple goals or individuals at once.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row5val4",
					desc: "Multitasks effectively, with the ability to manage deliverables in multiple projects, initiatives and tasks while also managing team performance.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row5val5",
					desc: "Multitasks effectively, with the ability to manage deliverables in multiple projects, initiatives and tasks while also managing team performance. Shares best practices and assist others in developing this skill.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}, {
				id: "6",
				name: "Tool Utilization",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row6val1",
					desc: "Does not effectively utilize resources or workplace tools to achieve goals.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row6val2",
					desc: "Inconsistently utilizes resources or workplace tools to achieve goals.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row6val3",
					desc: "Utilizes workplace tools and their features to achieve desired goals.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row6val4",
					desc: "Utilizes workplace tools and their features in a manner which maximizes productivity output.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row6val5",
					desc: "Utilizes workplace tools and their features in a manner which maximizes productivity output and teaches others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
		}]
	},{
		id: "3",
		name: "Builds Relationships",
		rows: [{
				id: "1",
				name: "Builds Relationships",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Does not demonstrate the ability to build effective relationships. Fosters an environment of reluctance and non-engagement which creates negative reactions and interactions with teammates and stakeholders.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Inconsistent with building effective relationships. Does not actively seek feedback or collaborate with others in order to achieve goals which can lead to loss of trust and respect.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Builds effective relationships with key internal teammates through collaboration and understanding. Fosters trust & respect.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Builds effective relationships with key internal teammates and external stakeholders to enhance collaboration and understanding, while fostering trust and respect of team and partners.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Maintains and forms partnership with teammates and stakeholders to achieve expectations. Takes responsibility for behavior, mistakes, and results. Learns from successes and failures, and teaches others to do the same. Fosters a positive environment which motivates others by expressing confidence about the importance of the task and the ability of others to accomplish it.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Collaboration",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: 'Works independently towards organizational goals, without actively seeking partnership and collaboration. Actively imposes "my way" environment within their team.',
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: 'Passively works on the organizational goals and does not seek for collaborative efforts with teammates and stakeholders.',
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Works collaboratively with other leaders to meet organizational goals. Seeks and considers ideas from others, including those who are reluctant to express their points of view.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Initiates collaboration within workgroups or with other leaders to achieve organizational goals. Actively engages others to share best practices. Anticipates, recognizes and addresses the concerns of others, even if those concerns are not openly expressed.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: "Takes initiative to partner with teammates/ stakeholders and involves them in generating mutually beneficial long-term opportunities and achieving win-win outcomes. Is a role model to others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Style Flexibility",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Does not interact with others involved in the tasks or projects, nor with teammates and/or stakeholders.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "Maintains static personality style while interacting with others, unable to adapt personal style to best fit the needs and communication style of others.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Adapts to other people's behavior style in order to achieve desired goals.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Adapts personal communication style to other people's behavioral style in order to meet individual and group goals, and collaborate with others to help them achieve their goals.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Supports a constructive climate and works with an engaging communication style in ways that facilitate contributions by both collaboratively building upon or synthesizing the contributions of others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Meeting Engagement",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row4val1",
					desc: "Does not attempt to actively engage in meetings with teammates and/or stakeholders. Makes excuses for non-involvement in meetings, planning sessions etc.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row4val2",
					desc: "Prefers to not actively engage during meetings or with business leaders.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row4val3",
					desc: "Builds rapport by listening to, discussing and negotiating with direct reports, peers and business leaders.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row4val4",
					desc: "Builds partnerships through active engagement with team and key stakeholders, fostering rapport through active listening, collaborative discussion/negotiation and follows through with rewarding, encouraging, and motivating others.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row4val5",
					desc: "Encourages others to participate and support team activities and decision making. Solicits and respects others' opinions and is willing to learn from them. Positively contributes to the performance of the team while staying committed to address concerns/problems. Is a role model to others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "5",
				name: "Rapport",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row5val1",
					desc: "Does not demonstrate willingness for rapport building.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row5val2",
					desc: "Focuses too much time on rapport building without managing the performance of the team or focuses only on performance management without building trust and rapport.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row5val3",
					desc: "Demonstrates a balance between building rapport and getting the work done.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row5val4",
					desc: "Effectively balances rapport building and time management skills, and helps others do the same.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row5val5",
					desc: "Develops mutually beneficial relationships and partnerships based upon trust, respect, and achievement of common goals. Demonstrates tenacity, persevering through significant challenges to reach goals. Supports perseverance in others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "6",
				name: "Conflict Management",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row6val1",
					desc: "Does not exert effort to manage conflicts and avoids discussions and/or disagreements",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row6val2",
					desc: "Uses discipline or fear to manage conflicts, confrontations or disagreements.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row6val3",
					desc: "Manages conflicts, confrontations and disagreements in a constructive manner.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row6val4",
					desc: "Proactively prevents and effectively manages conflict, confrontations and disagreements in a constructive manner.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row6val5",
					desc: "Addresses destructive conflict and helps manage/resolve it which strengthens overall team cohesiveness and future effectiveness. Maintains a stable performance that is acceptable to others and the organization under the pressures of high workload, conflict, and ambiguity. Assists others in dealing with conflicts and stress.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}]
	},{
		id: "4",
		name: "Critical Thinking",
		rows: [{
				id: "1",
				name: "Root Cause Analysis",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Does not understand the principles of cause and effect. Identifies inappropriate key issue or none at all. Describes issue inaccurately and fails to identify component points.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Does not understand the principles of cause and effect. Addresses symptoms instead of root cause.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Understands principles of cause and effect. Analyzes issues to separate cause from symptoms.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Understands and mitigates risk based on principles of cause and effect. Proactively analyzes issues to separate cause from symptoms and creates solutions.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Provides accurate interpretations that illustrate insight into information from which they are made. Draws conclusions that reflect clear and logical links of cause and effect and the interpretations made from them. Proactively and accurately analyzes the relevant constraints/issues. Teaches others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Data Analysis",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "No attempt in gathering various data for analysis.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Ineffective at gathering data in order to resolve a problem in an efficient manner. Makes assumptions instead of evaluating evidence.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Follows a standard process to gather information or data to solve a problem. Evaluates information explores and investigates in a deliberate manner",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Identifies and obtains the information, key issues and relationships, while distinguishing between relevant and irrelevant data needed to solve a problem effectively. Employs creative problem solving techniques to explore and investigate key issues",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: "Identifies and obtains the information, key issues and relationships, while distinguishing between relevant and irrelevant data needed to solve a problem effectively. Employs creative problem solving techniques to explore and investigate key issues. Accurately presents data and illustrates patterns or trends in a way that recognizes and correctly highlights the patterns and relationships and teaches others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Creative Thinking",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Fails to accurately identify and assess the challenges",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "When presented with a challenge, sees only the problems and obstacles without designing ways to overcome them.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Thinks of alternatives for a situation and anticipates potential obstacles.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Thinks of several possible explanations or alternatives for a situation and anticipates potential obstacles. Develops contingency plans to overcome them.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Demonstrates and implements multiple analytical and creative approaches to a given challenge and describes how various perspectives were used in addressing the problem or challenge. Teaches others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Ownership",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row4val1",
					desc: "Denies responsibility or ownership when challenges arise or takes responsibility or credit for success that isn't theirs.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row4val2",
					desc: "Fails to acknowledge when one does not know the answer, or does not take the steps to learn or understand.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row4val3",
					desc: "Acknowledges when one does not know something and takes the appropriate steps to learn or understand.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row4val4",
					desc: "Acknowledges when one does not know something and takes the appropriate steps to learn or understand. Closes the information gap by communicating back to the initial individual or group.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row4val5",
					desc: "Takes accountability through acknowledgment of lack of knowledge/information and is committed to keep current with trends and issues that may impact the job or company through research and other channels. Incorporates knowledge of current trends to the emerging departmental / client needs where applicable.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "5",
				name: "Solution Oriented",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row5val1",
					desc: "Inability to identify problems or issues and or/ untimely identification of issues or problems.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row5val2",
					desc: "Identifies or articulates problems incorrectly, resulting in ineffective solutions.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row5val3",
					desc: "Identifies current problems and looks for solutions.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row5val4",
					desc: "Proactively identifies issues or problems, and initiates problem analysis, including others if needed to recommend and implement a solution.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row5val5",
					desc: "Proactively provides an accurate analysis of the effects of the issue or problem, including the complete description of possible effects. Provides highly thoughtful and creative approach for correcting issues or problems.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}]
	},{
		id: "5",
		name: "Business Acumen",
		rows: [{
				id: "1",
				name: "Levers",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Unable to communicate how key performance indicators and behaviors link to the goals of the business.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Struggles with understanding and linking key performance indicators to the business.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Recognizes how key performance indicators and behaviors link to the goals of the business.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Recognizes how key performance indicators and behaviors link to the success and financial viability of the business.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Recognizes how key performance indicators and behaviors link to the success and financial viability of the business and teaches others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Role & Responsibilities",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "Fails to display or connect how personal behaviors relate to the organization’s mission and functions. Fails to adhere to expected ethical standards.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Inconsistently displays personal behaviors relating to the organization’s mission and functions. Inconsistently adheres to expected ethical standards.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Demonstrates understanding of the organization’s mission and functions, and is able to recognize one's role in the functioning of the company. Understands and executes on role responsibilities. Leads with integrity.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Demonstrates understanding and proactively communicates the organization’s mission and functions with peers and team. Is able to recognize one's role in the functioning of the company. Understands and is highly effective on execution of role responsibilities including adhering to ethical principles.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: "Is a role-model for the organization and actively emulates and shares the company’s mission, vision and values, always acting with integrity. Is highly effective in their current role and is considered to have high-potential.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Business Profitability",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Fails to demonstrate understanding of the Afni business model and fails to consistently execute on actions to align with what is required to operate profitably.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "Inconsistently demonstrates understanding of the Afni business model and fails to consistently execute on actions to align with what is required to operate profitably. Displays minimal knowledge of the relationship between engagement, productivity and attrition.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Demonstrates understanding of the Afni business model and executes on actions to align with what is required to operate profitably. Ability to articulate the relationship between the attrition and productivity, along with the financial impact of attrition to the business.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Demonstrates understanding of the Afni business model and executes on actions to align with what is required to operate profitably. Ability to articulate the relationship between the attrition and productivity, along with the financial impact of attrition to the business, while positively impacting the business through relationship management, follow-through and utilization of productivity tools.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Demonstrates understanding of the Afni business model and executes on actions to align with what is required to operate profitably. Ability to articulate the relationship between the attrition and productivity, along with the financial impact of attrition to the business, while positively impacting the business through relationship management, follow-through and utilization of productivity tools. Teaches others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Results",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row4val1",
					desc: "Does not follow direction or identify and address potential obstacles in order to achieve and deliver results. Does not effectively balance personal and team goals.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row4val2",
					desc: "Follows direction, but does not proactively identify and address potential obstacles in order to achieve and deliver results. Has challenges finding a balance between personal and team goals.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row4val3",
					desc: "Follows direction and identifies and address potential obstacles in order to achieve and deliver results. Works effectively towards achieving team goals.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row4val4",
					desc: "Initiates projects or work groups and partners with business leaders  with the goal of proactively addressing business related obstacles and overcoming challenges. Is a role model to others in demonstrating effective team work.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row4val5",
					desc: "Initiates projects or work groups and partners with business leaders  with the goal of proactively addressing business related obstacles and overcoming challenges. Teaches others to do the same. Is a role model to others in demonstrating effective team work.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "5",
				name: "Employee Engagement",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row5val1",
					desc: "Fails to demonstrate understanding of how employee satisfaction, motivation and morale impact productivity and the bottom line. Does not show appreciation for individual or team efforts.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row5val2",
					desc: "Inconsistently demonstrates understanding of how employee satisfaction, motivation and morale impact productivity and the bottom line. Does not consistently show appreciation for individual or team efforts.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row5val3",
					desc: "Positively impacts employee satisfaction, motivation and morale to impact productivity and the bottom line within their team. Makes individuals feel their work is important and valued through active appreciation.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row5val4",
					desc: "Actively engages employees and workgroups to increase employee satisfaction, while proactively identifying opportunities to increase motivation and positively impact morale, productivity and the bottom line. Empowers others and energizes them to do and to be their best.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row5val5",
					desc: "Actively engages employees and workgroups to increase employee satisfaction, while proactively identifying opportunities to increase motivation and positively impact morale, productivity and the bottom line. Empowers others and energizes them to do be their best. Teaches others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
				},{
				id: "6",
				name: "Ownership & Personal Development",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row6val1",
					desc: "Does not take ownership or accept feedback. Excuses exclude from taking accountability.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row6val2",
					desc: "Occasionally has challenges accepting constructive feedback and turning it into actionable change. Needs to be encouraged to pursue self development.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row6val3",
					desc: "Takes ownership, accepting feedback and acting upon it in a positive way. Accepting responsibility for personal development beyond what is provided by others in order to continuously improve.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row6val4",
					desc: "Takes ownership, accepting feedback and acting upon it in a positive way. Seeks opportunities for personal development in order to continuously improve.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row6val5",
					desc: "Takes ownership and accepts feedback. Is able to coach others to take ownership and turn it into actionable change. Strives for continual self development.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}]
	},{
		id: "6",
		name: "Communication",
		rows: [{
				id: "1",
				name: "Written",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Fails to convey ideas and facts in writing using language the reader will best understand. Fails to apply correct spelling, punctuation, capitalization, and grammar or sentence structure when writing.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Inconsistently conveys ideas and facts in writing using language the reader will best understand. Sometimes applies incorrect spelling, punctuation, capitalization, and grammar or sentence structure when writing.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Conveys ideas and facts in writing using language the reader will best understand through the use of direct messaging and appropriate spelling, word choice and grammar.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Tailors efficient and effective written communication to the audience through the use of direct messaging and appropriate spelling, word choice and grammar.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Excels in communicating in writing through the positioning of efficient and effective written communication to the audience through the use of direct messaging and appropriate spelling, word choice and grammar. Is a role models to others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Thought Organization",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "Thoughts, ideas, information and messages are not conveyed in a logical, organized, and coherent manner resulting in confusion or the listener not interpreting the message as it was intended.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Thoughts, ideas, information and messages are inconsistently conveyed in a logical, organized, and coherent manner resulting in confusion or the listener not interpreting the message as it was intended.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Can communicate thoughts, ideas, information, messages, and other  information in a logical, organized, and coherent manner, allowing the reader or listener to understand the message conveyed.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Can communicate thoughts, ideas, information, messages, and other  information in a logical, organized, and coherent manner, allowing the reader or listener to understand the message conveyed. Reflects or asks for feedback on message communicated to strengthen communication.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: "Can communicate thoughts, ideas, information, messages, and other  information in a logical, organized, and coherent manner in both written and verbal communications, allowing reader or listener to understand the message conveyed. Reflects or asks for feedback on message communicated to strengthen communication. Provides others constructive feedback in a positive manner and is a role model to others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Word Choice",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Utilizes inappropriate word choice, tone or language in written or verbal communication. Utilizes technical and local jargon, or excessive abbreviations. (Frequently violates the English Only Policy offshore)",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "Tends to utilize inappropriate word choice, tone or language in written or verbal communication. Utilizes technical and local jargon, or excessive abbreviations. (Periodically violates the English Only Policy offshore)",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Writes and speaks in a manner appropriate for business using appropriate tone and word choice and language. Applies the utilization of technical and local jargon appropriately. (including the English Only Policy offshore)",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Effectively articulates thoughts and ideas in a manner appropriate for business using appropriate tone and word choice and language, including the ability to appropriately communicate to internal and external key stakeholders.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Effectively articulates thoughts and ideas in a manner appropriate for business using appropriate tone and word choice and language, Excels in the ability to appropriately communicate to internal and external key stakeholders.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Active Listening",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row4val1",
					desc: "Does not demonstrate active listening skills",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row4val2",
					desc: "Inconsistently demonstrates active listening skills",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row4val3",
					desc: "Demonstrates active listening skills",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row4val4",
					desc: "Displays active listening through utilization of effective questions and thoughtful consideration of other's ideas and actions.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row4val5",
					desc: "Displays active listening through utilization of effective questions and thoughtful consideration of other’s ideas and actions and encourages other to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "5",
				name: "Cross-level Communication",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row5val1",
					desc: "Lacks ability to communicate with direct reports, peers or leaders within their program.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row5val2",
					desc: "Displays limited ability to communicate with direct reports, peers or leaders within their program.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row5val3",
					desc: "Comfortable communicating with direct reports, peers and leaders within their program.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row5val4",
					desc: "Comfortable communicating with different levels of the organization, including executives, clients and other functional group leaders.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row5val5",
					desc: "Effectively tailors message delivery to audience. Comfortable communicating with different levels of the organization, including executives, clients and other functional group leaders. Provides feedback to others to enhance their communication skills.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "6",
				name: "Urgency Approach",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row6val1",
					desc: "Sends email when an urgent item is due, versus calling or escalating appropriately.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row6val2",
					desc: "Inconsistently utilizes the correct medium (email or phone), to address urgent issues.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row6val3",
					desc: "Utilizes the correct medium, email or phone, to address urgent issues.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row6val4",
					desc: "Utilizes multiple methods of communication well before items become urgent while reinforcing deliverables and escalates appropriately.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row6val5",
					desc: "Utilizes multiple methods of communication well before items become urgent while reinforcing deliverables and escalates appropriately. Provides constructive feedback to others in a positive way.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}]
	},{
		id: "7",
		name: "Training Delivery with Impact",
		rows: [{
				id: "1",
				name: "Preparation",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Lacks readiness or preparation in facilitating a class. Is unfamiliar with material or does not arrive at work with enough time to prepare for class.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Inconsistantly displays readiness for class. Is familiar with material, however does not arrive at work with enough time to prepare for class.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Displays readiness or preparing when facilitating class through arriving on time and pre-reviewing the material for the day.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Displays readiness or preparing when facilitating class through arriving on time and pre-reviewing the material for the day. Learning plans and facilitation methods are adjusted in advance to accommodate learners' needs.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Always displays readiness when facilitating class by arriving early and pre-reviewing the material for the day. Learning plans and facilitation methods are adjusted in advance to accomodate learners' needs. Is a role model for others and provides best practices to others.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Learning Objectives",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "Training objectives are not reviewed resulting in no conceptual understanding for participants.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Training objectives reviewed, but are not linked to intended training outcomes.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Training objectives reviewed and linked to intended training outcomes. Participants have a conceptual understanding of expectations and understand the importance of learning.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Training objectives reviewed and linked to intended training outcomes. Participants have a conceptual understanding of expectations and understand the importance of learning. Questions from participants are encouraged for clarification and further understanding.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: "Training objectives reviewed and linked to intended training outcomes throughout the entire class. Participants have a conceptual understanding of expectations and understand the importance of learning. Questions from participants are encouraged for clarification and further understanding. Objectives are clearly articulated and linked to the learner's role and responsiblities.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Learning Style",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Unable to articulate, identify and adjust to different approaches to learning that participants exhibit, including Adult Learning styles and existing knowledge levels.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "Has general understanding of the different approaches to learning, however uses limited facilitation techniques, mostly lecture-type of discussion.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Strategizes, plans and utilizes a variety of learning approaches and methodologies to meet different participant's needs. Is able to make real time adjustments based on class engagement and knowledge transfer. Align learning solutions with course objectives and learner needs.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Strategizes, plans and utilizes a variety of learning approaches and methodologies to meet different participant's needs. Is able to make real time adjustments based on class engagement and knowledge transfer. Checks for understanding and feedback is non-judgemental and individualized and specific to the participant.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Strategizes, plans and utilizes a variety of learning approaches and methodologies to meet different participant's needs. Is able to make real time adjustments based on class engagement and knowledge transfer. Checks for understanding and feedback is non-judgemental and individualized and specific to the participant. Provision is made for participants to self assess and use feedback in their own learning.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Engagement",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row4val1",
					desc: "Does not actively encourage collaboration during class discussion through effective questioning or respond to learners questions appropriately.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row4val2",
					desc: "Inefficient in conveying learning objectives and outcomes. Answers to the questions is confusing to the learners. Interactions are generally appropriate but reflect occasional inconsistencies or disregard for learners.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row4val3",
					desc: "Encourages participation and builds motivation. Successfully engages in class discussion, accommodates learners questions or interests. Answers to questions are understood by the learners. Learners exhibit comfort, trust with facilitator.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row4val4",
					desc: "Encourages participation and builds motivation. Successfully engages in discussion, accommodates learners questions or interests. Answers to questions are understood by learners. Learners exhibit comfort, trust with facilitator. Learners are given the opportunity to express their opinions and are encouraged to give suggestions when needed.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row4val5",
					desc: "Promotes participation to maximize learning by engaging the participants well throughout the entire training program. Effectively utilizes opportunities to enhance learning by building on spontaneous events and successfully accommodates participants' questions or interests which significantly enhances the curriculum. Demonstrates genuine caring and respect for individual participants. Interactions are appropriate and enhance the learning process. Teaches other facilitators to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "5",
				name: "Learning Environment",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row5val1",
					desc: "Does not manage the learning environment. Learning sessions are facilitator-centered and needs of the learners are not recognized. Plan for organization and use of training room space is not demonstrated. Classroom procedures or routines for efficient use of instructional time is missing. Facilitator typically falls behind the designated agenda.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row5val2",
					desc: "Displays inconsistency in managing the learning environment. Learning sessions include basic use of training room space and materials. A few training room procedures or routines for efficient use of instructional time are included. Minimal attention to specific strategies for managing participants' behavior. Facilitator sometimes falls behind the designated agenda.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row5val3",
					desc: "Manages and promotes positive learning environment. Learning sessions include strategies for building rapport of the participants. Trainer encourages participants to find and utilize training materials. Training room procedures and routines for efficient use of training time are included. Time management is displayed by facilitator.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row5val4",
					desc: "Manages and promotes positive learning environment. Learning sessions include strategies for building rapport with the participants and is sensitive to diversity. Facilitator encourages participants to find and utilize training materials and effectively adjusts activities to align with learning environment. Training room procedures and routines are effectively followed. Time management is displayed by facilitator.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row5val5",
					desc: "Facilitator is a role model, always creating a positive learning environment. Learning sessions include strategies for building rapport with the participants and is sensitive to diversity and consistently relates to the expectations, roles and responsibilities of the participants. Encourages participants to find and utilize training materials and effectively adjusts activities to align with learning environment. The learning sessions include sharing best practices. Makes optimal use of instructional time, including transitions and collaboration of participants work. Teaching behavioral expectations are included and adhered to.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "6",
				name: "Presentation",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row6val1",
					desc: "Facilitator does not present themself well in class and acts poorly as a mentor for the group. Does not adhere to the company policies on dress code and work ethics. Creates unprofessional relationships with learners.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row6val2",
					desc: "Inconsistent in demonstrating professional values. Application of company policies and work ethics are selective. Makes little effort to fulfill the role of a mentor to the participants. Relationships created with learners are not always professional.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row6val3",
					desc: "Can articulate the values, ethics and standards of the organization. Reflects the professional values and ethics fundamental in training. Maintains poise and demeanor in class. Recognizes personal limitations of knowledge, experience and culture, stating limitations when necessary. Able to assess participants' level of skills and act as mentor as required. Observes appropriate professional boundaries.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row6val4",
					desc: "Can articulate the values, ethics and standards of the organization. Reflects the professional values and ethics fundamental in training. Maintains poise and demeanor in class. Recognizes personal limitations of knowledge, experience and culture, and strategizes how to overcome boundaries. Maintains professional relationships with participants that are supportive of their learning needs. Presents them self at all times as a professional and observes appropriate boundaries expected. Proactively act as a mentor for the participants.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row6val5",
					desc: "Emulates the values, ethics and standards of the organization and functional group. Is a role model in poise and demeanor in class. Recognizes personal limitations of knowledge, experience and culture, and strategizes how to overcome boundaries. Maintains professionalism at all times and is able to handle any situation with finesse and knowledge, sensitive to learning. Presents themself at all times as a professional and observes appropriate boundaries expected. Demonstrates respect and consideration for all participants. Models an approach to mentoring participants and peers characterized by an open-mind, a willingness to learn from each other, mutual respect, objectivity and rational critique.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}]
	},{
		id: "8",
		name: "Evaluating Learning Impact",
		rows: [{
				id: "1",
				name: "Reporting",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Does not maintain records of training-related information such as coaching records, attendance and daily required reports.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Inconsistently maintains records of training-related information such as coaching records, attendance and daily required reports.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Accurately and consistently maintains records of training-related information such as coaching records, attendance and daily required reports.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Accurately and consistently maintains records of training-related information such as coaching records, attendance and daily required reports. Analyzes data to draw conclusions and shares them appropriately.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Accurately and consistently maintains records of training-related information such as coaching records, attendance and daily required reports. Analyzes data to draw conclusions and shares them appropriately. Partners with peers and leader to analyze & validate data, draw action conclusions and leverage participant's improvement and growth.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Behvioral Levers",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "Unable to communicate how key performance indicators and behavior link to the goals of the business. Lacks knowledge of the relationship between engagement, productivity and attrition.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Can discuss how the key performance indicators and behavior link to the goals of the business, however the learners are unable to communicate or demonstrate the principles. Is able to draw some connections between engagement, productivity and attrition.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Can discuss how the key performance indicators and behavior link to the goals of the business and the learners can communicate and demonstrate the principles. Is able to come up with solutions to outstanding issues related to productivity and attrition. Leverages findings to increase effectiveness and provide recommendations for change.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Can discuss how the key performance indicators and behavior link to the goals of the business and implements differentiated plans that maximizes opportunities for the learners. Is able to come up with solutions to outstanding issues related to productivity and attrition. Leverages findings to increase effectiveness and provide recommendations for change. Is a mentor for peers and shares best practices.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: 'Evaluation and analysis of key performance indicators is completed with action plans provided for continuous performance improvement. Execution plans are focused and implemented on process or behavioral change that impacts the key performance indicators. Serves as a "go-to" resource for peers and leaders on connecting how workplace learning impacts operational metrics. Able to provide detailed action plans on issues related to engagement, productivity and attrition and the message and plans are well communicated to partners. Assists others with solving related challenges and role models best practices.',
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Impact of Learning on Performance",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Does not regard the performance of the learners as soon as they are out of training.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "Inconsistently checks on performance of participants. Facilitates next class without analyzing performance of previous group and making appropriate adjustments in training.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "During transition or learning lab, gathers and analyzes performance numbers. Consistently monitors and coaches performance of participants. Documents learners performance and general patterns to make adjustments in upcoming classes.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "During transition or learning lab gathers and analyzes performance numbers. Effectively monitors and coaches performance of participants. Documents learners performance and understands patterns for future reference. Uses data for interim assessments/activities to adjust training/coaching, retrain, and follow up with the participants. Reflects on the effectiveness of the training/coaching and continuously works to improve.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "During transition or learning lab gathers and analyzes performance numbers to effectively and efficiently coach behaviors. Documents learners performance and integrates trends for future reference. Uses data for interim assessments/activities to adjust training/coaching, retrain, and follow up with the participants. Manages and analyzes 30 and 60 days post training performance and provides understanding of potential issues and relate back to training by providing recommendations for program and delivery improvement. Communicates updates throughout training organization.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}]
	},{
		id: "9",
		name: "Effective Learning Technology Management",
		rows: [{
				id: "1",
				name: "Learning Management System",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Utilization of learning management system (Alps or client) is not fully maximized. Learners do not complete required courses in a timely manner.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Utilization of learning management system (Alps or client) is inconsistent. Follow-up is sometimes needed for completion of courses (both personal and class related).",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Utilizes learning management system appropriately. Ensures completion of all mandatory ALPS courses, both company and client (learners and personal) on the set timeline or deadline.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Utilizes learning management system appropriately. Ensures completion of all Alps courses, both company and client (learner and personal) on the set timeline or deadline. Can effectively troubleshoot challenges that arise with the LMS.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Maximizes the use of the Alps system by completing mandatory courses (learner and personal) and understands relation to performance improvement and process knowledge ahead of the timeline or deadline. Recommends improvements to LMS and helps resolve LMS related issues.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Timekeeping",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row2val1",
					desc: "Does not regularly check time keeping system. Payroll correction deadlines are missed and payroll errors occur.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row2val2",
					desc: "Inconsistently monitors time keeping system (personal and class). Payroll correction deadlines sometimes missed or payroll errors sometimes occur.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row2val3",
					desc: "Timekeeping system is checked daily and builds habit with learners to regularly check timecards. Payroll deadlines are met with very minimal errors.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row2val4",
					desc: "Timekeeping system is checked daily and builds habit with learners to regularly check timecards. Payroll deadlines are always met and leader ensures forms are correct.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row2val5",
					desc: 'Timekeeping system is checked daily and builds habit with learners to regularly check timecards. Payroll deadlines are always met and leader ensures forms are correct. Is a role model for their team and encourages and supports team members to complete tasks in a timely manner.',
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Process",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row3val1",
					desc: "Leader is not familiar with the HR processes such as Recommendation for Termination, Attrition Notice, Transfers etc. Does not follow outlined processes.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row3val2",
					desc: "Leader inconsistently follows HR processes such as Recommendation for Termination, Attrition Notice, Transfers etc. Frequently asks for assistance with pre-determined process.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row3val3",
					desc: "Leader is familiar with the HR processes such as Recommendation for Termination, Attrition Notice, Transfers etc. and follows the processes as set.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row3val4",
					desc: "Leader is  familiar with the HR processes such as Recommendation for Termination, Attrition Notice, Transfers etc. and follows the processes as designed and assists others in implementing proper process and decisions.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row3val5",
					desc: "Leader is familiar with the HR processes such as Recommendation for Termination, Attrition Notice, Transfers etc. and follows the processes as designed and assists others in implementing proper process and decisions. Is able to interpret knowledge of the HR processes to maintain or increase awareness of practices that translates to employee satisfaction.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			}]
	},{
		id: "10",
		name: "Client Relationship Management",
		rows: [{
				id: "1",
				name: "Communication Filters",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Does not utilize an internal filter prior to sharing messages with the client which results in communicating at an inappropriate time, setting, to the wrong audience or unintended consequences occur. Ineffectively communicates the message to the client.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Sometimes shares messages inappropriate for the time, setting, audience or does not consider potential consequences of message. Sometimes communicates the right message in the wrong way.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Has the ability to filter their communication appropriately by internally reviewing the filters of timing (is it the right time?), setting (is this the right setting to make this statement?), audience (is this the best/most appropriate audience to share this with?), and unintended consequence (what are potential consequences if I share this information). Is able to communicate the right message in the right way. Has the forethought to run messages through leadership to ensure it will be communicated appropriately.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Has the ability to  filter their communication appropriately by internally reviewing the filters of timing (is it the right time?), setting (is this the right setting to make this statement?), audience (is this the best/most appropriate audience to share this with?), and unintended consequence (what are potential consequences if I share this information). Leadership trusts individual to communicate with the client, needing only minimal oversight.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Is a role model when communicating to the client. Communicates the right message in the right way, considering time, setting, audience and intended consequence. Teaches other to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "2",
				name: "Sense of Urgency",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Unable to effectively balance assigned tasks from clients and leadership. Is not able to prioritize assigned tasks effectively, resulting in missed due dates. Focuses on what can't be done versus what can be done.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Struggles with balancing day to day tasks with urgent and important client requests. Sometimes does not meet dates for assigned deliverables due to ineffective time prioritization.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Understands and implements effective prioritization of client requests and tasks.  Balances the urgent and important items along with day to day deliverables. Communicates appropriate response times to leadership and client (instead of saying yes to all deliverables and dates). Proposes solutions for what can be done instead of what cannot be done.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Effectively implements prioritization of client requests and tasks. Balances urgent and important items along with day to day deliverables. Communicates appropriate response times to leadership and client. Proactively proposes solutions to challenges. Communicates appropriate sense of urgency and importance to any internal project team members.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Effectively implements prioritization of client requests and tasks. Balances urgent and important items along with day to day deliverables. Communicates appropriate response times to leadership and client. Proactively proposes solutions to challenges. Communicates appropriate sense of urgency and importance to any internal project team members, while teaching others to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "3",
				name: "Professional Relationships",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Unable to maintain a professional relationship with clients. Becomes personally involved with the client outside of work (friendship or otherwise). Communicates with client outside of work approved email (Facebook, twitter, personal calls, etc.) Consistently does not meet deadlines, causing distrust with the client.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: 'Is periodically challenged with maintaining professional relationships through becoming friends with the client versus "being friendly", utilizing casual versus professional language with the client or having to recommunicate deliverable dates multiple times.',
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Maintains professional relationship demonstrated through professional conduct, communicating only within the scope of the job and consistently delivering results when promised.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Maintains professional relationship demonstrated through professional conduct, communicating only within the scope of the job and consistently delivering results when promised. Brings challenges and observations to internal leadership to ensure visibility and solutioning is present.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Is a role model of professionalism, demonstrated through professional conduct, communicating only within the scope of the job and consistently delivering results when promised. Brings challenges and observations to internal leadership to ensure visibility and provides recommended solutions.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
			},{
				id: "4",
				name: "Preparedness",
				minval: 1,
				maxval: 5,
				curval: 0,
				behvs: [{
					id: "1",
					name: "row1val1",
					desc: "Does not understand the client's business and how the manager position impacts the outcomes. Has challenges translating desired behaviors into performance. Presents challenges, but does not always have a solution for the gap.",
					style: 'text-align:left; padding-left: 8px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 1
				},{
					id: "2",
					name: "row1val2",
					desc: "Understands the client's business and how the manager position impacts the outcomes, however has difficulty translating this understanding into a positive impact on performance. Is able to discuss why each KPI is important and how it relates to the customer, Afni and the client, but does not always take appropriate steps to ensure teams performance meets expectations. Presents challenges, but does not always have a solution for the gap.",
					style: 'text-align:left;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 2
				},{
					id: "3",
					name: "row1val3",
					desc: "Understands the client's business and how the manager position impacts the outcomes. Is able to discuss why each KPI is important and how it relates to the customer, Afni and the client. Takes appropriate steps to understand the levers and drivers behind teams performance. Presents action plans and steps to resolve gaps.",
					style: 'text-align:center;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 3
				},{
					id: "4",
					name: "row1val4",
					desc: "Understands the client's business and how the manager position impacts the outcomes. Is able to discuss and connect why each KPI is important and how it relates to the customer, Afni and the client and translate this information to direct reports. Proactively identifies potential challenges and takes appropriate steps to close the gaps. Takes appropriate steps to understand the levers and drivers behind teams performance.",
					style: 'text-align:right;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 4
				},{
					id: "5",
					name: "row1val5",
					desc: "Is a role model in being prepared for any questions related to teams performance. Answers questions at the correct level and relates how the team performance relates to the client business. Proactively identifies potential challenges and takes appropriate steps to close the gaps. Takes appropriate steps to ensure the levers and drivers behind teams performance are aligned for success. Teaches team to do the same.",
					style: 'text-align:right; white-space:break-word; padding-right:5px;',
					currstyle: 'padding:16px; font-weight:bold;',
					value: 5
				}]
		}]
}];