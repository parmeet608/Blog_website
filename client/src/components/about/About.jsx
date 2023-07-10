
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Code for Interview</Typography>
                <Text variant="h5">We are a dynamic team of four ITS program students at Humber College. With a shared passion for technology and innovation, we collaborate to tackle diverse challenges in the IT field. Through our combined expertise in web development, software engineering, and system analysis, we strive to deliver high-quality projects. With strong communication and problem-solving skills, we work together to create user-friendly and scalable solutions. As lifelong learners, we continuously update our skills to stay at the forefront of the ever-evolving tech industry. We are excited to leverage our collective talents to make a positive impact in the world of information technology.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    contact us on<br/>
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="" color="inherit" target="_blank">
                            <Instagram /> <br/>
                        </Link>
                    </Box>  
                        or send me an Email <br/>
                        <Link href="" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;