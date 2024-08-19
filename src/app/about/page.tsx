
const About = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our Ecommerce App! We are dedicated to providing you with the best online shopping experience.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-lg mb-4">
        Our mission is to deliver high-quality products at competitive prices while ensuring excellent customer service.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Wide range of products across various categories</li>
        <li>Secure payment options</li>
        <li>Fast and reliable shipping</li>
        <li>24/7 customer support</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
      <p className="text-lg mb-4">
        We believe in integrity, transparency, and innovation. Our team works tirelessly to ensure that our customers are satisfied with their purchases.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <p className="text-lg mb-4">
        Our team consists of experienced professionals who are passionate about eCommerce. We work collaboratively to bring you the best products and services.
      </p>
      <ul className="list-disc list-inside text-lg mb-4">
        <li><strong>John Doe</strong> - CEO & Founder</li>
        <li><strong>Jane Smith</strong> - Chief Technology Officer</li>
        <li><strong>Emily Johnson</strong> - Head of Customer Service</li>
        <li><strong>Michael Brown</strong> - Marketing Director</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">Customer Testimonials</h2>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
      &quot;I had an amazing shopping experience! The customer service was top-notch and my order arrived quickly.&quot; - <strong>Sarah Connor</strong>
      </blockquote>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
      &quot;The product quality exceeded my expectations. I will definitely shop here again!&quot; - <strong>James Cameron</strong>
      </blockquote>
      
      <h2 className="text-2xl font-semibold mb-2">Our History</h2>
      <p className="text-lg mb-4">
        Founded in 2020, our Ecommerce App started with a simple vision: to make online shopping accessible and enjoyable for everyone. Over the years, we have grown significantly, expanding our product range and improving our services to better meet the needs of our customers.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <p className="text-lg mb-4">
        If you have any questions or feedback, feel free to contact us. We would love to hear from you!
      </p>
    </div>
  );
};

export default About;