import React from 'react'
import {
  Button,
  Card,
  CardButton,
  CardText,
  CardImage,
  Typography
} from 'bit-ui-wise'
import PropTypes from 'prop-types'

const Team3 = () => {
  const styles = {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#9e9e9e'
  }

  return (
    <div style={styles}>
      <div>
        <Card>
          <CardText>
            <Typography>Header</Typography>
          </CardText>
          <CardImage img='https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.1605559903.fit_scale.size_760x427.png' />
          <CardText>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              ex.
            </Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
          </CardText>
          <CardButton
            buttons={[<Button>Click me</Button>, <Button>Click me</Button>]}
          />
        </Card>
      </div>

      {/*Text Card No Pic*/}

      <Card size='sm'>
        <CardText>
          <Typography variant='large'>Header</Typography>
        </CardText>
        <CardText>
          <Typography variant='small'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex.
          </Typography>
          <Typography variant='small'>Lorem ipsum dolor sit amet.</Typography>
        </CardText>
        <CardButton
          position='left'
          buttons={[
            <Button variant='outlined' color='delete' size='sm'>
              Click me
            </Button>,
            <Button size='sm' variant='outlined' color='warning'>
              Click me
            </Button>
          ]}
        />
      </Card>

      {/*Text Card No Pic*/}
  
      <Card size="md">
      <CardText textAlign="center">
        <Typography variant='large'  >Header</Typography>
      </CardText>
      <CardText>
        <Typography variant="small" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex.
        </Typography>
        <Typography variant="small">Lorem ipsum dolor sit amet.</Typography>
      </CardText>
      <CardButton position="left"
        buttons={[<Button variant="outlined" color="delete" size="sm">Click me</Button>, <Button size="sm" variant="outlined" color="warning">Click me</Button>]}
      />
    </Card>

    {/* Card w/ Image*/}
    <Card size="md">
    <CardImage img='https://picsum.photos/1200/900' bgSize height="300px" />
      <CardText>
        <Typography variant='large'  >Header</Typography>
      </CardText>
      <CardText>
        <Typography variant="small" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex.
        </Typography>
        <Typography variant="small">Lorem ipsum dolor sit amet.</Typography>
      </CardText>
      <CardButton position="left"
        buttons={[<Button variant="outlined" color="delete" size="sm">Click me</Button>, <Button size="sm" variant="outlined" color="warning">Click me</Button>]}
      />
    </Card>
      {/* Card w/ Image*/}
      <Card size='md'>
        <CardImage img='https://picsum.photos/1200/900' bgSize height='300px' />
        <CardText>
          <Typography variant='large'>Header</Typography>
        </CardText>
        <CardText>
          <Typography variant='small'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex.
          </Typography>
          <Typography variant='small'>Lorem ipsum dolor sit amet.</Typography>
        </CardText>
        <CardButton
          position='left'
          buttons={[
            <Button variant='outlined' color='delete' size='sm'>
              Click me
            </Button>,
            <Button size='sm' variant='outlined' color='warning'>
              Click me
            </Button>
          ]}
        />
      </Card>
    </div>

    //     <div style={styles}>
    //       {/* VERSION 2 */}
    //       <Card size='sm'>
    //         <CardImage img={'https://via.placeholder.com/300/'} />
    //         <CardHeader title='hello' subTitle='hello again'>
    //           <Typography variant='header'>this is a header</Typography>
    //           <Typography variant='sub-header'>this is sub-header</Typography>
    //         </CardHeader>
    //         <CardText>
    //           <Typography variant='header'>Hello</Typography>
    //           <Typography variant='sub-header'>this</Typography>
    //           <Typography variant='body'>
    //             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //             Consectetur quidem ducimus assumenda aperiam cum aliquam, distinctio
    //             laudantium facilis id, dolor incidunt? Sunt autem consequatur
    //             delectus perspiciatis consectetur accusantium explicabo sequi.
    //           </Typography>
    //         </CardText>
    //         <CardButton
    //           buttons={[
    //             <Button size='sm' variant={'delete'}>
    //               Delete Me!
    //             </Button>,
    //             <Button size='sm' variant={'primary'}>
    //               pay now
    //             </Button>
    //           ]}
    //         />
    //       </Card>

    //       <Card size='md'>
    //         <CardImage
    //           // imgSize='sm'
    //           bgSize='cover'
    //           // height='800px'
    //           img={'https://via.placeholder.com/825/'}
    //         />
    //         <CardHeader title='hello' subTitle='hello again'>
    //           <Typography variant='header'>this is a header</Typography>
    //           <Typography variant='sub-header'>this is sub-header</Typography>
    //         </CardHeader>
    //         <CardText>
    //           <Typography variant='header'>Hello</Typography>
    //           <Typography variant='sub-header'>this</Typography>
    //           <Typography variant='body'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
    //             sit at, ipsam magnam atque corrupti! Quos ipsa similique soluta,
    //             atque doloribus eos perspiciatis blanditiis earum inventore
    //             voluptates. Tempore, quas ullam.
    //           </Typography>
    //         </CardText>
    //         <CardButton
    //           // position='center'
    //           buttons={[
    //             <Button size='md' variant={'delete'}>
    //               Delete Me!
    //             </Button>,
    //             <Button size='md' variant={'primary'}>
    //               Click Me!
    //             </Button>
    //           ]}
    //         />
    //       </Card>

    //       <Card size='lrg'>
    //         <CardHeader title='hello' subTitle='hello again'>
    //           <Typography variant='header'>this is a header</Typography>
    //           <Typography variant='sub-header'>this is sub-header</Typography>
    //         </CardHeader>
    // {    /*    <CardImage img={'https://via.placeholder.com/825/'} /> */
    // <CardImage img={'https://picsum.photos/400/600'} />

    // }        <CardText>
    //           <Typography variant='header'>Hello</Typography>
    //           <Typography variant='sub-header'>this</Typography>
    //           <Typography variant='body'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
    //             veniam ut officiis quam tempore omnis vel eligendi soluta voluptatem
    //             hic aliquam, quibusdam obcaecati aliquid perspiciatis cum! Soluta
    //             dignissimos nostrum impedit.
    //           </Typography>
    //         </CardText>
    //         <CardButton
    //           buttons={[
    //             <Button size='lrg' variant={'delete'}>
    //               Delete Me!
    //             </Button>,
    //             <Button size='lrg' variant={'primary'}>
    //               Click Me!
    //             </Button>
    //           ]}
    //         />
    //       </Card>

    //       <div style={{ width: '400px' }}>
    //         <Card>
    //           <CardHeader title='hello' subTitle='hello again'>
    //             <Typography variant='header'>this is a header</Typography>
    //             <Typography variant='sub-header'>this is sub-header</Typography>
    //           </CardHeader>
    //           <CardImage img={'https://via.placeholder.com/825/'} />
    //           <CardText>
    //             <Typography variant='header'>Hello</Typography>
    //             <Typography variant='sub-header'>this</Typography>
    //             <Typography variant='body'>
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
    //               veniam ut officiis quam tempore omnis vel eligendi soluta
    //               voluptatem hic aliquam, quibusdam obcaecati aliquid perspiciatis
    //               cum! Soluta dignissimos nostrum impedit.
    //             </Typography>
    //           </CardText>
    //           <CardButton
    //             buttons={[
    //               <Button size='lrg' variant={'delete'}>
    //                 Delete Me!
    //               </Button>,
    //               <Button size='lrg' variant={'primary'}>
    //                 Click Me!
    //               </Button>
    //             ]}
    //           />
    //         </Card>
    //       </div>

    //       {/*DEFAULT PROPS*/}
    //       <div style={{width: '500px'}}>
    //        <Card >
    //         <CardHeader >
    //           <Typography variant='header'>this is a header</Typography>
    //           <Typography variant='sub-header'>this is sub-header</Typography>
    //         </CardHeader>
    // {    /*    <CardImage img={'https://via.placeholder.com/825/'} /> */
    // <CardImage img={'https://picsum.photos/400/600'} />

    // }        <CardText>
    //           <Typography variant='header'>Hello</Typography>
    //           <Typography variant='sub-header'>this</Typography>
    //           <Typography variant='body'>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
    //             veniam ut officiis quam tempore omnis vel eligendi soluta voluptatem
    //             hic aliquam, quibusdam obcaecati aliquid perspiciatis cum! Soluta
    //             dignissimos nostrum impedit.
    //           </Typography>
    //         </CardText>

    //       </Card>
    //       </div>

    //       {/* VERSION 3 SIDE MODE */}
    //       {/* <Card direction='row'>
    //         <div style={leftSide}>
    //           <CardHeader title='hello' subTitle='hello again'></CardHeader>
    //           <CardText>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
    //             harum molestias fugit voluptates, architecto repellat sequi placeat
    //             perspiciatis impedit deleniti quidem aspernatur aliquid saepe id
    //             dolorum laboriosam minima! Accusantium, dolorum!
    //           </CardText>
    //           <CardButton
    //             buttons={[
    //               <Button size='small' variant={'delete'}>
    //                 Delete Me!
    //               </Button>,
    //               <Button size='small' variant={'primary'}>
    //                 Click Me!
    //               </Button>
    //             ]}
    //           />
    //         </div>
    //         <div>
    //           <CardImage img={'https://picsum.photos/400/600'} />
    //         </div>
    //       </Card> */}
    //     </div>
  )
}

export default Team3
