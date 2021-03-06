import React, {useCallback} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {Menu, Input, Row, Col} from 'antd' // antd 에 Menu 사용
import styled, {createGlobalStyle} from 'styled-components'
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import {useSelector} from 'react-redux'
import useInput from "../hooks/useInput";
import Router from "next/router";


const Global = createGlobalStyle`
	.ant-row {
		margin-right: 0 !important;
		margin-left: 0 !important;
	}

	.ant-col:first-child {
		padding-left: 0 !important;
	}

	.ant-col:last-child {
		padding-right: 0 !important;
	}
`

// antd 에서 사용한 Input.Search 를 styled components 로 바꿔 넣어줌
const SearchInput = styled(Input.Search)`
	vertical-align: middle;
`

const AppLayout = ({children}) => {
	//const [isLoggedIn, setIsLoggedIn] = useState(false)
	// 유저 자체를 받아와서 유저 안에서 isLoggedIn 을 구조분해 할당
	//const { isLoggedIn } = useSelector((state) => state.user)
	const [searchInput, onChangeSearchInput] = useInput('')
	const {me} = useSelector((state) => state.user)
	
	const onSearch = useCallback(
			() => {
				Router.push(`/hashtag/${searchInput}`) // searchInput 해쉬태그로 이동
			},
			[searchInput],
	);
	

	return (
			<div>
				<Global/>
				<Menu mode="horizontal">
					<Menu.Item key="home">
						<Link href="/">
							<a>노드버드</a>
						</Link>
					</Menu.Item>
					<Menu.Item key="profile">
						<Link href="/profile">
							<a>프로필</a>
						</Link>
					</Menu.Item>
					<Menu.Item key="mail">
						<SearchInput // 검색창을 통해 해쉬태그 검색
								enterButton
								value={searchInput}
								onChange={onChangeSearchInput}
								onSearch={onSearch}
						/>
					</Menu.Item>
				</Menu>
				{/*컬럼 사이의 간격 gutter*/}
				<Row gutter={8}>
					{/*antd design 은 세로줄을 24 픽셀로 나눔*/}
					<Col xs={24} md={6}>
						{/*dummy data*/}
						{/*{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}*/}
						{me ? <UserProfile/> : <LoginForm/>}
					</Col>
					<Col xs={24} md={12}>
						{children} {/*여기는 AppLayout 의 children*/}
					</Col>
					<Col xs={24} md={6}>
						<a href="https://qhrdmaaksen.github.io/" target={'_blank'} rel="noreferrer noopener">
							Made in Vitamin
						</a>
					</Col>
				</Row>
			</div>
	)
}

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AppLayout
