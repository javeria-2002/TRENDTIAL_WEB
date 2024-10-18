import React from 'react'

function ServicesCard() {
    return (
      <>
        <div className="main-heading-content text-center my-20">
          <h1 className="my-3">Welcome To Dignity</h1>
          <p className="underline-p">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div
          className="container my-12 mx-auto px-4 md:px-0"
          style={{ maxWidth: "90%" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">Our Service</h2>
          </div>
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="flex w-full items-center justify-center">
                <article className="group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                    <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                      title
                    </h2>
                    <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolor nostrum nesciunt reiciendis labore vel velit
                      blanditiis vero, amet corporis porro saepe officiis
                      officia sit sequi molestiae ab libero, quo tempora
                      repellat? Facilis doloremque, eligendi neque sed fuga
                      tempore hic magnam qui in sint maiores id, itaque totam,
                      quis quasi! Minima amet excepturi sit aliquid dolores eos
                      quam asperiores eius consectetur repudiandae pariatur
                      nostrum laboriosam, non ullam? Exercitationem ipsam illum
                      eos architecto veniam magnam, officia pariatur sit odit
                      inventore ab natus culpa cum placeat illo voluptas eum
                      reprehenderit adipisci. Nostrum vel aperiam dolorem quo
                      exercitationem dicta aut doloremque itaque tempore
                      similique at accusantium veniam voluptate, commodi quis
                      debitis accusamus, esse qui saepe adipisci odit corporis?
                      Ad ipsam dolores aspernatur animi unde voluptas vero
                      recusandae totam alias. Placeat quasi, perferendis ad cum
                      illo quaerat est cumque maxime incidunt natus corporis
                      debitis et nesciunt, excepturi ipsam officiis laborum
                      voluptate perspiciatis blanditiis provident ut aliquid
                      fugit nemo illum. Similique, sequi doloribus soluta
                      suscipit eligendi quidem laudantium modi incidunt dolore
                      officia nam blanditiis numquam iusto temporibus odit unde
                      consectetur voluptatem enim asperiores rerum quam,
                      repellat commodi aliquid impedit! Voluptatibus, ex
                      asperiores sed, laborum quibusdam quae assumenda vero in
                      minima qui est numquam modi placeat cum!
                    </p>
                    <a
                      className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      href="/"
                    >
                      find out more
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="flex  w-full items-center justify-center">
                <article className="group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
                  <img
                   className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                    <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                      title
                    </h2>
                    <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolor nostrum nesciunt reiciendis labore vel velit
                      blanditiis vero, amet corporis porro saepe officiis
                      officia sit sequi molestiae ab libero, quo tempora
                      repellat? Facilis doloremque, eligendi neque sed fuga
                      tempore hic magnam qui in sint maiores id, itaque totam,
                      quis quasi! Minima amet excepturi sit aliquid dolores eos
                      quam asperiores eius consectetur repudiandae pariatur
                      nostrum laboriosam, non ullam? Exercitationem ipsam illum
                      eos architecto veniam magnam, officia pariatur sit odit
                      inventore ab natus culpa cum placeat illo voluptas eum
                      reprehenderit adipisci. Nostrum vel aperiam dolorem quo
                      exercitationem dicta aut doloremque itaque tempore
                      similique at accusantium veniam voluptate, commodi quis
                      debitis accusamus, esse qui saepe adipisci odit corporis?
                      Ad ipsam dolores aspernatur animi unde voluptas vero
                      recusandae totam alias. Placeat quasi, perferendis ad cum
                      illo quaerat est cumque maxime incidunt natus corporis
                      debitis et nesciunt, excepturi ipsam officiis laborum
                      voluptate perspiciatis blanditiis provident ut aliquid
                      fugit nemo illum. Similique, sequi doloribus soluta
                      suscipit eligendi quidem laudantium modi incidunt dolore
                      officia nam blanditiis numquam iusto temporibus odit unde
                      consectetur voluptatem enim asperiores rerum quam,
                      repellat commodi aliquid impedit! Voluptatibus, ex
                      asperiores sed, laborum quibusdam quae assumenda vero in
                      minima qui est numquam modi placeat cum!
                    </p>
                    <a
                      className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      href="/"
                    >
                      find out more
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="flex  w-full items-center justify-center">
                <article className="group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                    <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                      title
                    </h2>
                    <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolor nostrum nesciunt reiciendis labore vel velit
                      blanditiis vero, amet corporis porro saepe officiis
                      officia sit sequi molestiae ab libero, quo tempora
                      repellat? Facilis doloremque, eligendi neque sed fuga
                      tempore hic magnam qui in sint maiores id, itaque totam,
                      quis quasi! Minima amet excepturi sit aliquid dolores eos
                      quam asperiores eius consectetur repudiandae pariatur
                      nostrum laboriosam, non ullam? Exercitationem ipsam illum
                      eos architecto veniam magnam, officia pariatur sit odit
                      inventore ab natus culpa cum placeat illo voluptas eum
                      reprehenderit adipisci. Nostrum vel aperiam dolorem quo
                      exercitationem dicta aut doloremque itaque tempore
                      similique at accusantium veniam voluptate, commodi quis
                      debitis accusamus, esse qui saepe adipisci odit corporis?
                      Ad ipsam dolores aspernatur animi unde voluptas vero
                      recusandae totam alias. Placeat quasi, perferendis ad cum
                      illo quaerat est cumque maxime incidunt natus corporis
                      debitis et nesciunt, excepturi ipsam officiis laborum
                      voluptate perspiciatis blanditiis provident ut aliquid
                      fugit nemo illum. Similique, sequi doloribus soluta
                      suscipit eligendi quidem laudantium modi incidunt dolore
                      officia nam blanditiis numquam iusto temporibus odit unde
                      consectetur voluptatem enim asperiores rerum quam,
                      repellat commodi aliquid impedit! Voluptatibus, ex
                      asperiores sed, laborum quibusdam quae assumenda vero in
                      minima qui est numquam modi placeat cum!
                    </p>
                    <a
                      className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      href="/"
                    >
                      find out more
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="flex  w-full items-center justify-center">
                <article className="group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                    <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                      title
                    </h2>
                    <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolor nostrum nesciunt reiciendis labore vel velit
                      blanditiis vero, amet corporis porro saepe officiis
                      officia sit sequi molestiae ab libero, quo tempora
                      repellat? Facilis doloremque, eligendi neque sed fuga
                      tempore hic magnam qui in sint maiores id, itaque totam,
                      quis quasi! Minima amet excepturi sit aliquid dolores eos
                      quam asperiores eius consectetur repudiandae pariatur
                      nostrum laboriosam, non ullam? Exercitationem ipsam illum
                      eos architecto veniam magnam, officia pariatur sit odit
                      inventore ab natus culpa cum placeat illo voluptas eum
                      reprehenderit adipisci. Nostrum vel aperiam dolorem quo
                      exercitationem dicta aut doloremque itaque tempore
                      similique at accusantium veniam voluptate, commodi quis
                      debitis accusamus, esse qui saepe adipisci odit corporis?
                      Ad ipsam dolores aspernatur animi unde voluptas vero
                      recusandae totam alias. Placeat quasi, perferendis ad cum
                      illo quaerat est cumque maxime incidunt natus corporis
                      debitis et nesciunt, excepturi ipsam officiis laborum
                      voluptate perspiciatis blanditiis provident ut aliquid
                      fugit nemo illum. Similique, sequi doloribus soluta
                      suscipit eligendi quidem laudantium modi incidunt dolore
                      officia nam blanditiis numquam iusto temporibus odit unde
                      consectetur voluptatem enim asperiores rerum quam,
                      repellat commodi aliquid impedit! Voluptatibus, ex
                      asperiores sed, laborum quibusdam quae assumenda vero in
                      minima qui est numquam modi placeat cum!
                    </p>
                    <a
                      className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      href="/"
                    >
                      find out more
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="flex  w-full items-center justify-center">
                <article className="group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                    <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                      title
                    </h2>
                    <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolor nostrum nesciunt reiciendis labore vel velit
                      blanditiis vero, amet corporis porro saepe officiis
                      officia sit sequi molestiae ab libero, quo tempora
                      repellat? Facilis doloremque, eligendi neque sed fuga
                      tempore hic magnam qui in sint maiores id, itaque totam,
                      quis quasi! Minima amet excepturi sit aliquid dolores eos
                      quam asperiores eius consectetur repudiandae pariatur
                      nostrum laboriosam, non ullam? Exercitationem ipsam illum
                      eos architecto veniam magnam, officia pariatur sit odit
                      inventore ab natus culpa cum placeat illo voluptas eum
                      reprehenderit adipisci. Nostrum vel aperiam dolorem quo
                      exercitationem dicta aut doloremque itaque tempore
                      similique at accusantium veniam voluptate, commodi quis
                      debitis accusamus, esse qui saepe adipisci odit corporis?
                      Ad ipsam dolores aspernatur animi unde voluptas vero
                      recusandae totam alias. Placeat quasi, perferendis ad cum
                      illo quaerat est cumque maxime incidunt natus corporis
                      debitis et nesciunt, excepturi ipsam officiis laborum
                      voluptate perspiciatis blanditiis provident ut aliquid
                      fugit nemo illum. Similique, sequi doloribus soluta
                      suscipit eligendi quidem laudantium modi incidunt dolore
                      officia nam blanditiis numquam iusto temporibus odit unde
                      consectetur voluptatem enim asperiores rerum quam,
                      repellat commodi aliquid impedit! Voluptatibus, ex
                      asperiores sed, laborum quibusdam quae assumenda vero in
                      minima qui est numquam modi placeat cum!
                    </p>
                    <a
                      className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      href="/"
                    >
                      find out more
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <div className="flex  w-full items-center justify-center">
                <article className="group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
                  <img
                   className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500">
                    <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                      title
                    </h2>
                    <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolor nostrum nesciunt reiciendis labore vel velit
                      blanditiis vero, amet corporis porro saepe officiis
                      officia sit sequi molestiae ab libero, quo tempora
                      repellat? Facilis doloremque, eligendi neque sed fuga
                      tempore hic magnam qui in sint maiores id, itaque totam,
                      quis quasi! Minima amet excepturi sit aliquid dolores eos
                      quam asperiores eius consectetur repudiandae pariatur
                      nostrum laboriosam, non ullam? Exercitationem ipsam illum
                      eos architecto veniam magnam, officia pariatur sit odit
                      inventore ab natus culpa cum placeat illo voluptas eum
                      reprehenderit adipisci. Nostrum vel aperiam dolorem quo
                      exercitationem dicta aut doloremque itaque tempore
                      similique at accusantium veniam voluptate, commodi quis
                      debitis accusamus, esse qui saepe adipisci odit corporis?
                      Ad ipsam dolores aspernatur animi unde voluptas vero
                      recusandae totam alias. Placeat quasi, perferendis ad cum
                      illo quaerat est cumque maxime incidunt natus corporis
                      debitis et nesciunt, excepturi ipsam officiis laborum
                      voluptate perspiciatis blanditiis provident ut aliquid
                      fugit nemo illum. Similique, sequi doloribus soluta
                      suscipit eligendi quidem laudantium modi incidunt dolore
                      officia nam blanditiis numquam iusto temporibus odit unde
                      consectetur voluptatem enim asperiores rerum quam,
                      repellat commodi aliquid impedit! Voluptatibus, ex
                      asperiores sed, laborum quibusdam quae assumenda vero in
                      minima qui est numquam modi placeat cum!
                    </p>
                    <a
                      className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      href="/"
                    >
                      find out more
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ServicesCard
