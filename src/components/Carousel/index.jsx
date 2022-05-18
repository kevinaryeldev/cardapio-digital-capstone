import { FigureStyled, TestimonialArticle, TestimonialHeader } from "./style";

const Carousel = ({ testimonial }) => {

    const { avatar, name, role, company, review } = testimonial

    return (
        <TestimonialArticle>
            <TestimonialHeader>
                <FigureStyled>
                    <img src={avatar} alt={name} />
                    <figcaption>{name}</figcaption>
                </FigureStyled>
                <div>
                    <h5>{name}</h5>
                    <h6>{role} - {company}</h6>
                </div>
            </TestimonialHeader>
                <p>"{review}"</p>
        </TestimonialArticle>

    )
}
export default Carousel