package com.saf.service.impl;

import com.saf.service.PianiDiStudioService;
import com.saf.domain.PianiDiStudio;
import com.saf.repository.PianiDiStudioRepository;
import com.saf.service.dto.PianiDiStudioDTO;
import com.saf.service.mapper.PianiDiStudioMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing PianiDiStudio.
 */
@Service
@Transactional
public class PianiDiStudioServiceImpl implements PianiDiStudioService {

    private final Logger log = LoggerFactory.getLogger(PianiDiStudioServiceImpl.class);

    private final PianiDiStudioRepository pianiDiStudioRepository;

    private final PianiDiStudioMapper pianiDiStudioMapper;

    public PianiDiStudioServiceImpl(PianiDiStudioRepository pianiDiStudioRepository, PianiDiStudioMapper pianiDiStudioMapper) {
        this.pianiDiStudioRepository = pianiDiStudioRepository;
        this.pianiDiStudioMapper = pianiDiStudioMapper;
    }

    /**
     * Save a pianiDiStudio.
     *
     * @param pianiDiStudioDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public PianiDiStudioDTO save(PianiDiStudioDTO pianiDiStudioDTO) {
        log.debug("Request to save PianiDiStudio : {}", pianiDiStudioDTO);
        PianiDiStudio pianiDiStudio = pianiDiStudioMapper.toEntity(pianiDiStudioDTO);
        pianiDiStudio = pianiDiStudioRepository.save(pianiDiStudio);
        return pianiDiStudioMapper.toDto(pianiDiStudio);
    }

    /**
     * Get all the pianiDiStudios.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<PianiDiStudioDTO> findAll() {
        log.debug("Request to get all PianiDiStudios");
        return pianiDiStudioRepository.findAllWithEagerRelationships().stream()
            .map(pianiDiStudioMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one pianiDiStudio by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public PianiDiStudioDTO findOne(Long id) {
        log.debug("Request to get PianiDiStudio : {}", id);
        PianiDiStudio pianiDiStudio = pianiDiStudioRepository.findOneWithEagerRelationships(id);
        return pianiDiStudioMapper.toDto(pianiDiStudio);
    }

    /**
     * Delete the pianiDiStudio by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete PianiDiStudio : {}", id);
        pianiDiStudioRepository.delete(id);
    }
}
