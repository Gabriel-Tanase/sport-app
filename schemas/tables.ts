
		export default {
			
				plan: {
					columns: ['id','title','description','price','currency','profileId','created_at'],
					relation: {
						profile: 'PlanToProfile'
					},
					ref: {
						profile: 'Profile'
					},
				}
			,
				event: {
					columns: ['id','title','description','place','duration','price','currency','profileId','created_at'],
					relation: {
						profile: 'EventToProfile'
					},
					ref: {
						profile: 'Profile'
					},
				}
			,
				gallery: {
					columns: ['id','images','profileId','created_at'],
					relation: {
						profile: 'GalleryToProfile'
					},
					ref: {
						profile: 'Profile'
					},
				}
			,
				education: {
					columns: ['id','institution','specialization','label','profileId','created_at'],
					relation: {
						profile: 'EducationToProfile'
					},
					ref: {
						profile: 'Profile'
					},
				}
			,
				workExperience: {
					columns: ['id','company','position','profileId','created_at'],
					relation: {
						profile: 'ProfileToWorkExperience'
					},
					ref: {
						profile: 'Profile'
					},
				}
			,
				profile: {
					columns: ['id','created_at','profileStatus','introduction','testimonial','sports','sessionTypes','sessionLocations','userId'],
					relation: {
						education: 'EducationToProfile',workExperience: 'ProfileToWorkExperience',plans: 'PlanToProfile',events: 'EventToProfile',gallery: 'GalleryToProfile',user: 'ProfileToUser'
					},
					ref: {
						education: 'Education',workExperience: 'WorkExperience',plans: 'Plan',events: 'Event',gallery: 'Gallery',user: 'User'
					},
				}
			,
				user: {
					columns: ['id','email','firstName','lastName','password','isTrainer','verifyToken','avatar','isPremium','deleted','disabled','profileId','created_at'],
					relation: {
						profile: 'ProfileToUser'
					},
					ref: {
						profile: 'Profile'
					},
				}
			
		}	
	