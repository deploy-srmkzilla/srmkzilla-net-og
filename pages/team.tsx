import Head from 'next/head'
import Navbar from '@shared/components/navbar'
import MemberCard from '@shared/components/team/membercard'
import NewCarousel from '@shared/components/team/carousel'
import Footer from '@shared/components/footer'
import { getTeamMembers } from '@lib/sanity-api'

const Team = ({ teamMembers }) => {
  return (
    <>
      <Head>
        <title>SRMKZILLA | Team</title>
        <meta
          name="description"
          content="SRMKZILLA is a community of young tech enthusiasts, Meet the team,
            An awesome tech community driven by passion and innovation "
        />
        <link rel="icon preload canonical" href="./images/kzillalogo.png" />
      </Head>
      <div className="bg-black overflow-hidden ">
        <Navbar />
        <p>fhjfvk</p>
        <div className="my-20">
          <h1 className="text-4xl font-semibold text-gray-100 text-center mb-10 mx-2">
            Meet the team
          </h1>
          <h3 className="text-xl text-gray-100 text-center px-5">
            An awesome tech community driven by passion and innovation
          </h3>
        </div>
        <div className=" text-white rounded-2xl pt-8 px-1  md:p-10 bg-black-200  md:mx-20 mx-5">
          <div className="my-10">
            <div className="mx-5 lg:mx-36">
              <hr
                className="text-center hr-text text-3xl md:text-4xl font-bold pb-10"
                data-content="CORE"
              />
            </div>

            <h5 className="text-center team_text text-lg text-gray-300 md:text-xl  pb-20">
              The captains of our ship
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 items-center">
              {teamMembers.map(
                (
                  member: {
                    picture: { asset: { url: string } }
                    name: string
                    domain: string
                    designation: string
                    description: { asset: { url: string } }
                  },
                  index
                ) => {
                  if (member.domain == 'Core') {
                    return (
                      <MemberCard
                        key={index}
                        src={member?.picture?.asset?.url}
                        name={member?.name}
                        designation={member?.designation}
                        audiourl={member?.description?.asset?.url}
                      />
                    )
                  }
                }
              )}
            </div>
          </div>
          <div className="mb-10 mt-20">
            <div className="mx-5 lg:mx-36">
              <hr
                className="text-center hr-text text-3xl md:text-4xl font-bold pb-10"
                data-content="TECHNICAL"
              />
            </div>

            <h5 className="text-center team_text  text-gray-300 text-lg md:text-xl  pb-20">
              We set the server up and running
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 items-center">
              {teamMembers.map(
                (
                  member: {
                    picture: { asset: { url: string } }
                    name: string
                    designation: string
                    domain: string
                    description: { asset: { url: string } }
                  },
                  index
                ) => {
                  if (member.domain == 'Technical') {
                    return (
                      <MemberCard
                        key={index}
                        src={member?.picture?.asset?.url}
                        name={member?.name}
                        designation={member?.designation}
                        audiourl={member?.description?.asset?.url}
                      />
                    )
                  }
                }
              )}
            </div>
          </div>
          <div className="mb-10 mt-20">
            <div className="mx-5 lg:mx-36">
              <hr
                className="text-center hr-text text-3xl md:text-4xl font-bold pb-10"
                data-content="EDITORIAL"
              />
            </div>

            <h5 className="text-center team_text text-lg text-gray-300 md:text-xl  pb-20">
              We add purpose to pixels
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 items-center">
              {teamMembers.map(
                (
                  member: {
                    picture: { asset: { url: string } }
                    name: string
                    domain: string
                    designation: string
                    description: { asset: { url: string } }
                  },
                  index
                ) => {
                  if (member.domain == 'Editorial') {
                    return (
                      <MemberCard
                        key={index}
                        src={member?.picture?.asset?.url}
                        name={member?.name}
                        designation={member?.designation}
                        audiourl={member?.description?.asset?.url}
                      />
                    )
                  }
                }
              )}
            </div>
          </div>
          <div className="mb-10 mt-20">
            <div className="mx-5 lg:mx-36">
              <hr
                className="text-center hr-text text-3xl md:text-4xl font-bold pb-10"
                data-content="SPONSORSHIP"
              />
            </div>

            <h5 className="text-center team_text text-lg text-gray-300 md:text-xl  pb-20">
              We got the vault and the deals
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 items-center">
              {teamMembers.map(
                (
                  member: {
                    picture: { asset: { url: string } }
                    name: string
                    domain: string
                    designation: string
                    description: { asset: { url: string } }
                  },
                  index
                ) => {
                  if (member.domain == 'Sponsorship') {
                    return (
                      <MemberCard
                        key={index}
                        src={member?.picture?.asset?.url}
                        name={member?.name}
                        designation={member?.designation}
                        audiourl={member?.description?.asset?.url}
                      />
                    )
                  }
                }
              )}
            </div>
          </div>

          <div className="my-10">
            <div className="mx-5 lg:mx-36">
              <hr
                className="text-center hr-text text-3xl md:text-4xl font-bold pb-10"
                data-content="EVENTS"
              />
            </div>

            <h5 className="text-center text-lg text-gray-300 md:text-xl pb-20">
              We set the stage, mic drop
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-2 items-center">
              {teamMembers.map(
                (
                  member: {
                    picture: { asset: { url: string } }
                    name: string
                    domain: string
                    designation: string
                    description: { asset: { url: string } }
                  },
                  index
                ) => {
                  if (member.domain == 'Events') {
                    return (
                      <MemberCard
                        key={index}
                        src={member?.picture?.asset?.url}
                        name={member?.name}
                        designation={member?.designation}
                        audiourl={member?.description?.asset?.url}
                      />
                    )
                  }
                }
              )}
            </div>
          </div>
        </div>

        <div className="my-32 px-0 md:px-10">
          <div className="flex flex-col place-items-center my-20">
            <h1 className="text-4xl font-semibold text-gray-100 text-center">
              Hear it from the team
            </h1>
            <h3 className="w-2/3 text-sm md:text-lg text-gray-100 text-center mt-5">
              The journey of building an awesome tech community is fuelled by
              the ardour of its team members. At SRMKZILLA, their ride has been
              full of incredible experiences to inspire and aspire. Let us hear
              what they have to say!
            </h3>
          </div>
          <NewCarousel />
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const teamMembers = await getTeamMembers()

  return {
    props: { teamMembers },
  }
}

export default Team
