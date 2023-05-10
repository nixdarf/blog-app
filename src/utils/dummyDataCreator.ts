import { PostType } from '@store/usePostStore.hook';
import { v4 as uuidv4 } from 'uuid';

export const dummyDataCreator = () => {
  const artAndEntertainmentPosts: PostType[] = [
    {
      id: uuidv4(),
      imgUrl: 'https://fastly.picsum.photos/id/814/1200/400.jpg?hmac=FKFmBfC3gbq35M4lLtlLapjlkaMnJFsqxlxMNjHHQbo',
      videoUrl: 'https://www.youtube.com/embed/-1sIkiQXDE8',
      title: 'The Fascinating World of Neuroscience',
      overview:
        'Neuroscience is the study of the nervous system and the brain. It is a field that has fascinated researchers and the general public for decades. Through advances in technology and scientific research, we have been able to uncover the intricacies of the brain and how it works. In this article, we will explore the basics of neuroscience and its applications in medicine, psychology, and artificial intelligence.',
      content: {
        __html: `
          <p>The brain is the most complex organ in the human body. It is responsible for our thoughts, emotions, memories, and behaviors. Neuroscience is the study of the nervous system and how it works. It encompasses a wide range of disciplines, including anatomy, physiology, biochemistry, and psychology.</p>
          <p>One of the most significant advances in neuroscience in recent years is the development of brain imaging techniques. Magnetic Resonance Imaging (MRI) and Computed Tomography (CT) scans allow researchers to examine the brain's structure and function. These techniques have led to a better understanding of how different regions of the brain are connected and how they work together to produce behavior and cognition.</p>
          <p>Neuroscience has many applications in medicine. For example, researchers are using brain imaging techniques to understand the neural basis of disorders such as Alzheimer's disease, Parkinson's disease, and schizophrenia. By understanding the underlying mechanisms of these disorders, researchers hope to develop new treatments and therapies.</p>
          <p>Neuroscience is also an essential component of psychology. Researchers use brain imaging techniques to study the neural basis of behavior and cognition. For example, neuroscientists have found that different regions of the brain are activated when people engage in different types of tasks. This knowledge has led to a better understanding of how we learn, remember, and make decisions.</p>
          <p>Finally, neuroscience is playing an increasingly important role in the development of artificial intelligence. Researchers are using neural networks, which are computer systems modeled on the structure and function of the brain, to develop new algorithms for tasks such as speech recognition and image classification.</p>
          <p>In conclusion, neuroscience is a fascinating field that has made significant strides in recent years. Through advances in technology and scientific research, we have gained a better understanding of the brain and its functions. Neuroscience has many applications in medicine, psychology, and artificial intelligence and will continue to be an essential field of study in the years to come.</p>
        `,
      },
      createdAt: new Date('2022-08-22T10:30:00Z'),
      author: 'John Doe',
    },
    {
      id: uuidv4(),
      imgUrl: 'https://fastly.picsum.photos/id/136/1200/400.jpg?hmac=Psann3LBiI50rCtfR-MmGzOlRAJMHBGtJUvxKEkbf1w',
      videoUrl: 'https://www.youtube.com/embed/4DM7Cyb0paM',
      title: 'The Beauty of Mathematics in Art',
      overview:
        'The relationship between mathematics and art has been present for centuries, with various artists incorporating geometric shapes, patterns, and symmetry in their works. In this article, we will explore the beauty of mathematics in art and how these two seemingly different fields are more connected than one might think.',
      content: {
        __html: `
          <p>Art and mathematics may seem like two entirely different fields, but in reality, they share a deep and fascinating connection. Many famous artists such as Leonardo da Vinci, M.C. Escher, and Salvador Dali have incorporated mathematical concepts into their works, producing masterpieces that are not only aesthetically pleasing but also intellectually stimulating.</p>
          <p>One of the most significant contributions of mathematics to art is the use of geometric shapes and patterns. Geometry, which is a branch of mathematics, is all about shapes and their properties. By using different shapes and patterns, artists can create visually striking compositions that convey meaning and emotions. For example, Islamic art, which is known for its intricate geometric patterns, uses these shapes to represent the infinite and divine.</p>
          <p>Another mathematical concept that has been used in art is symmetry. Symmetry is a fundamental principle in mathematics, which involves the balance and proportionality of shapes and forms. Many artists have used symmetry to create artworks that are both harmonious and pleasing to the eye. For example, the Taj Mahal, one of the most beautiful buildings in the world, features intricate symmetrical patterns and designs.</p>
          <p>Mathematics has also contributed to the use of perspective in art. Perspective is a technique that is used to create the illusion of depth and space in two-dimensional works. It involves the use of vanishing points, horizon lines, and foreshortening to create the illusion of three-dimensional space. This technique has been used in many famous artworks such as Leonardo da Vinci's "The Last Supper" and Michelangelo's "The Creation of Adam."</p>
          <p>In conclusion, the relationship between mathematics and art is a fascinating one that has been present for centuries. By incorporating mathematical concepts such as geometric shapes, patterns, symmetry, and perspective, artists have been able to create visually striking and intellectually stimulating works of art. Mathematics is not just a dry and abstract subject, but it can also be beautiful and inspiring, just like art.</p> 
        `,
      },
      createdAt: new Date('2023-05-01T10:30:00Z'),
      author: 'Jane Smith',
    },
    {
      id: uuidv4(),
      imgUrl: 'https://fastly.picsum.photos/id/369/1200/400.jpg?hmac=zMQV-OlTTLDAgV8D0Ozbivr5p-NKJUyl3q6a6dkof3w',
      videoUrl: 'https://www.youtube.com/embed/v-hcGHbWFbs',
      title: 'The Fascinating World of Quantum Physics',
      overview:
        'Quantum physics is one of the most fascinating areas of science, exploring the strange and counterintuitive behavior of the smallest particles in the universe. In this article, we will delve into the world of quantum physics and explore some of its most intriguing concepts.',
      content: {
        __html: `
          <p>Quantum physics is the branch of physics that deals with the behavior of matter and energy at the smallest scale, such as atoms and subatomic particles. The laws of classical physics, which govern the behavior of larger objects, do not always apply to the quantum world. Instead, the principles of quantum mechanics govern the behavior of these tiny particles.</p>
          <p>One of the most well-known concepts in quantum physics is the idea of superposition. This concept suggests that a particle can exist in multiple states at the same time. For example, an electron can be in two different energy levels simultaneously. It is only when we observe the particle that it collapses into a single state.</p>
          <p>Another intriguing concept in quantum physics is entanglement. When two particles become entangled, their properties become correlated, even when they are separated by great distances. This has led to the idea of quantum teleportation, where information can be transmitted instantly over vast distances.</p>
          <p>Quantum physics also includes the concept of the uncertainty principle, which suggests that it is impossible to know both the position and momentum of a particle with absolute precision. This principle has far-reaching implications for our understanding of the universe, and has been the subject of much debate among physicists.</p>
          <p>Despite the many mysteries and counterintuitive concepts of quantum physics, it remains one of the most exciting and rapidly developing areas of science. From quantum computing to quantum cryptography, the applications of this field are wide-ranging and promising. As we continue to explore the quantum world, we can only imagine what new discoveries and technologies may lie ahead.</p>
          <p>In conclusion, quantum physics may seem daunting and complex, but it is also endlessly fascinating. By exploring the strange and counterintuitive behavior of the smallest particles in the universe, we can gain a deeper understanding of the fundamental nature of the universe and the laws that govern it. Whether you are a scientist or simply someone with a curiosity about the world around us, the world of quantum physics is sure to captivate and inspire.</p>
        `,
      },
      createdAt: new Date('2023-02-09T10:30:00Z'),
      updatedAt: new Date('2023-02-10T10:30:00Z'),
      author: 'Bob Johnson',
    },
    {
      id: uuidv4(),
      imgUrl: 'https://fastly.picsum.photos/id/564/1200/400.jpg?hmac=CvZ07uuqRtkbk_pTlX6cC6XHr7YszmAhCPc_0yISp0I',
      videoUrl: 'https://www.youtube.com/embed/4DM7Cyb0paM',
      title: 'The Power of Art in Shaping Society',
      overview:
        'Art has been an essential part of human life for centuries. It is a medium of expression that captures the essence of our experiences, emotions, and thoughts. Art has a unique ability to influence and shape our culture and society. This article explores the impact of art on society and its ability to create a positive change.',
      content: {
        __html: `
          <p>Art has been used as a tool for social change since ancient times. From the cave paintings of the Paleolithic period to the modern-day graffiti, art has been used to express dissent, promote social justice, and bring about change.</p>
          <p>One of the most significant impacts of art on society is its ability to create awareness and promote dialogue about social issues. Art has the power to engage people on a deeper level, beyond words and statistics. Artistic expressions such as paintings, sculptures, and photographs can evoke emotions and feelings that words cannot. They can help people understand complex issues and create empathy towards marginalized communities.</p>
          <p>Another important aspect of art is its ability to promote cultural exchange and understanding. Art has the power to break down cultural barriers and bring people from different backgrounds together. It can expose people to new ideas, traditions, and perspectives, fostering mutual respect and appreciation.</p>
          <p>Art also plays a critical role in preserving history and culture. Artifacts, monuments, and buildings are a testament to our collective history and heritage. They provide us with a glimpse into the past, allowing us to learn from our ancestors and preserve their legacy.</p>
          <p>In conclusion, art is an essential part of our culture and society. It has the power to create a positive change by promoting social awareness, cultural exchange, and preserving our history and heritage. As we continue to navigate through the complexities of the modern world, art remains a beacon of hope and inspiration, reminding us of our shared humanity and the need to work towards a better future.</p>
        `,
      },
      createdAt: new Date('2023-05-07T10:30:00Z'),
      author: 'John Smith',
    },
    {
      id: uuidv4(),
      imgUrl: 'https://fastly.picsum.photos/id/419/1200/400.jpg?hmac=vOWTjOj2qhPWRggopzbFEcnvx0nF3-Et-RhQaVsdXyk',
      videoUrl: 'https://www.youtube.com/embed/SwNragtBBWQ',
      title: 'The Science Behind Meditation',
      overview:
        'Meditation is becoming increasingly popular as a way to improve mental and physical health. However, many people may not know the scientific basis for this ancient practice. This article explores the science behind meditation and how it can benefit our bodies and minds.',
      content: {
        __html: `
          <p>Meditation is a practice that involves focusing one's attention on a particular object, thought or activity to achieve a mentally clear and emotionally calm state. It has been used for thousands of years as a way to reduce stress, improve concentration and promote inner peace. But it is only in recent years that science has begun to uncover the physical and mental benefits of meditation.</p>
          <p>One of the most well-known effects of meditation is its ability to reduce stress. When we are stressed, our body releases the hormone cortisol, which triggers the "fight or flight" response. This response increases heart rate and blood pressure, and prepares the body to respond to a perceived threat. However, chronic stress can lead to a number of health problems, including heart disease, high blood pressure and depression. Studies have shown that meditation can reduce cortisol levels, leading to lower stress levels and improved mental health.</p>
          <p>Another benefit of meditation is improved focus and concentration. Meditation involves training the mind to focus on a single object or thought, which can help to improve cognitive function. Studies have shown that regular meditation can increase gray matter in the brain, which is responsible for processing information and making decisions.</p>
          <p>In addition to its mental benefits, meditation can also have physical benefits. For example, research has shown that meditation can reduce inflammation in the body, which is linked to a number of chronic health conditions. Meditation has also been shown to reduce pain, improve sleep quality and boost the immune system.</p>
          <p>There are many different types of meditation, including mindfulness meditation, transcendental meditation and loving-kindness meditation. Each type has its own unique benefits and can be practiced in a variety of settings, from a quiet room to a busy office.</p>
          <p>In conclusion, the science behind meditation is still being explored, but the benefits of this ancient practice are becoming increasingly clear. From reducing stress and improving mental clarity to boosting physical health, meditation has something to offer everyone. So, why not give it a try and see how it can benefit your mind and body?</p>
        `,
      },
      createdAt: new Date('2022-10-17T10:30:00Z'),
      updatedAt: new Date('2022-10-27T12:15:00Z'),
      author: 'John Doe',
    },
    {
      id: uuidv4(),
      imgUrl: 'https://fastly.picsum.photos/id/395/1200/400.jpg?hmac=a_SufGIOShVP4RodCjHxHcL5GXunJ4CEj1iBZ15_6bA',
      videoUrl: 'https://www.youtube.com/embed/NLyB9iyW6k8',
      title: 'The Mind-Bending Concept of Time Travel',
      overview:
        'Time travel has been a popular topic in science fiction for decades, but is it truly possible? In this article, we explore the theories and concepts behind time travel, including the concept of time dilation and the physics behind wormholes.',
      content: {
        __html: `
          <p>Time travel has captured the imaginations of people for generations. From H.G. Wells' "The Time Machine" to the popular "Back to the Future" franchise, the idea of traveling through time has always been a popular topic in literature and movies. But is time travel just a fantasy, or could it be a reality?</p>
          <p>According to Einstein's theory of relativity, time is relative to the observer's position and movement in space. This means that time can appear to move faster or slower depending on your relative position to another object or observer. For example, if you were to travel in a spaceship close to the speed of light, time would appear to slow down for you compared to someone on Earth. This is known as time dilation.</p>
          <p>The concept of time travel is often associated with the idea of wormholes, which are hypothetical tunnels through space-time that connect two points in space. The theory goes that if you were to travel through a wormhole, you could emerge at another point in time or space. However, wormholes are purely theoretical at this point and have never been observed in nature.</p>
          <p>Another concept related to time travel is the idea of the grandfather paradox. This paradox asks the question: what would happen if you went back in time and killed your own grandfather, preventing your own birth? The answer is unknown, and it's a topic of much debate among physicists and science fiction writers.</p>
          <p>While the concept of time travel remains largely in the realm of science fiction, the theories and concepts behind it continue to fascinate and inspire. Who knows what the future holds? Perhaps one day we will find a way to travel through time and unlock the secrets of the past and the mysteries of the future.</p>
        `,
      },
      createdAt: new Date('2023-03-09T10:30:00Z'),
      author: 'Alice Jones',
    },
  ];

  return artAndEntertainmentPosts;
};
