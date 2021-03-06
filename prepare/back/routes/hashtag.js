const express = require('express')
const {Op} = require("sequelize");
const {Post, Comment, User, Image, Hashtag} = require("../models");
const router = express.Router()

router.get('/:hashtag', async (req, res, next) => { // GET /hashtag/노드
	try {// 여러개 가져올때 사용(findAll)
		const where = {};
		// lstId 받기
		if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐때
			where.id = {[Op.lt]: parseInt(req.query.lastId, 10)} // id 가 lastId 보다 작은([Op.lt]:) < 의미
		}
		const posts = await Post.findAll({
			//where: {id: lastId}, // lastId 는 고정되어있기때문에 사용
			// offset: 0, 1번 게시글부터 10번 게시글까지, offset 10이면 11번부터 20번까지
			where,
			limit: 10, // 10 개 가져와라, 10개 가져온 후 또 10개 10개 10개 ...
			// 2 차원 배열,  DESC 는 최신 게시글 부터 가져옴 오래된순은 ASC
			order: [['createdAt', 'DESC']], // 게시글 생성일부터 내림차순 정렬
			include: [{
				model: Hashtag,
				where: {name: decodeURIComponent(req.params.hashtag)}, //front 에서 encode 로 요청이왔고 응답은 decode 로 설정
			},{
				model: User, // 게시글 작성자
				attributes: ['id', 'nickname'],
			}, {
				model: Image,
			}, {
				model: Comment, // 댓글
				include: [{
					model: User, // 댓글의 작성자
					attributes: ['id', 'nickname'],
					order: [['createdAt', 'DESC']],
				}],
			}, {
				model: User, // 좋아요 누른 사람
				as: 'Likers',
				attributes: ['id'],
			}, {
				model: Post,
				as: 'Retweet',
				include: [{
					model: User,
					attributes: ['id', 'nickname'],
				}, {
					model: Image,
				}]
			}],
		})
		console.log(posts)
		res.status(200).json(posts)
	} catch (error) {
		console.error(error)
		next(error)
	}
})

module.exports = router